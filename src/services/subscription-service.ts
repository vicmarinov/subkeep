import { supabase } from '../lib/supabase';
import { Brief as SubscriptionBriefData } from '../types/subscriptions';

async function getAll (
    abortController: AbortController,
    filter?: { categoryName?: string | null; searchValue?: string }
): Promise<SubscriptionBriefData[]> {
    const joinType = filter?.categoryName ? '!inner' : '';
    
    let query = supabase
        .from('subscriptions')
        .select(`
            id,
            name,
            price,
            ...categories${joinType} (
                categoryName:name
            )
        `)
    
    if (filter?.categoryName) {
        query = query.eq('categories.name', filter.categoryName);
    } else if (filter?.categoryName === null) {
        query = query.is('category_id', null);
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