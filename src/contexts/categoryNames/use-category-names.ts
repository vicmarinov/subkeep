import { useContext } from 'react';
import CategoryNamesContext from './category-names-context';

export default function useCategoryNames () {
    const contextValue = useContext(CategoryNamesContext);

    if (!contextValue) {
        throw new Error('`useCategoryNames` must be used within a `CategoryNamesProvider`');
    }

    return contextValue;
}