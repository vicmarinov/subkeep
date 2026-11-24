import { supabase } from '../lib/supabase';
import { Brief as SubscriptionBriefData } from '../types/subscriptions';

async function getAll (
    abortController: AbortController,
    filter?: { categoryName?: string; searchValue?: string }
): Promise<SubscriptionBriefData[]> {
    let query = supabase
        .from('subscriptions')
        .select(`
            id,
            name,
            price,
            ...categories (
                categoryName:name
            )
        `)
    
    if (filter?.categoryName) {
        query = query.eq('categories.name', filter.categoryName);
    }

    if (filter?.searchValue) {
        query = query.ilike('name', `%${filter.searchValue}%`);
    }

    query = query.abortSignal(abortController.signal);
    const response = await query;

    if (!response.success) {
        throw response.error;
    }

    return response.data;
}

const subscriptionService = {
    getAll
};
export default subscriptionService;