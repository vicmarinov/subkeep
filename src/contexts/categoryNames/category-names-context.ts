import { createContext } from 'react';
import type { Name as CategoryName } from '../../types/categories';

export type CategoryNamesContextType =
    | {
        isLoading: true;
        names?: undefined;
    }
    | {
        isLoading: false;
        names: CategoryName[];
    }
    | undefined;

const CategoryNamesContext = createContext<CategoryNamesContextType>(undefined);

export default CategoryNamesContext;