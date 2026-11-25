import { type ReactNode, useEffect, useState } from 'react';
import CategoryNamesContext, { type CategoryNamesContextType } from './category-names-context';
import categoryService from '../../services/category-service';
import { Alert } from 'react-native';

export default function CategoryNamesProvider (
    { children }: { children: ReactNode; }
) {
    const [
        contextValue,
        setContextValue
    ] = useState<Exclude<CategoryNamesContextType, undefined>>({
        isLoading: true
    });

    useEffect(() => {
        const abortController = new AbortController();

        categoryService.getAllNames(abortController)
            .then(names => setContextValue({ isLoading: false, names }))
            .catch(error => {
                if (error.message.startsWith('AbortError')) {
                    console.log('Category names fetch was aborted.');
                } else {
                    Alert.alert(
                        'Fetch Error',
                        'Failed to fetch category names. Please try again later.'
                    );

                    console.error('Category names fetch error:', error);
                }
            });
        
        return () => abortController.abort();
    }, []);

    return (
        <CategoryNamesContext.Provider value={contextValue}>
            {children}
        </CategoryNamesContext.Provider>
    );
}