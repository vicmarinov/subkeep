import type { Database } from './database.types';
import type { Name as CategoryName } from './categories';

type DatabaseSchema = Database['public']['Tables']['subscriptions'];

export type Data = DatabaseSchema['Row'];
export type WithCategoryName = Data & { categoryName: CategoryName | null };
export type Brief = Pick<WithCategoryName, 'id' | 'name' | 'price' | 'categoryName'>;