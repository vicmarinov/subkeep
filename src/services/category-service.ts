import { supabase } from '../lib/supabase';
import type { Name as CategoryName } from '../types/categories';

async function getAllNames (
    abortController: AbortController
): Promise<CategoryName[]> {
    const response = await supabase
        .from('categories')
        .select('name')
        .order('name')
        .abortSignal(abortController.signal);
    
    if (!response.success) {
        throw response.error;
    }

    return response.data.map(({ name }) => name);
}

const categoryService = {
    getAllNames
};

export default categoryService;