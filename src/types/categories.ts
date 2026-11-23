import type { Database } from './database.types';

type DatabaseSchema = Database['public']['Tables']['categories'];

export type Data = DatabaseSchema['Row'];
export type Name = Data['name'];