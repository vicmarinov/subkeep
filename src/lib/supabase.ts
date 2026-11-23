import 'react-native-url-polyfill/auto';
import 'expo-sqlite/localStorage/install';
import { createClient } from '@supabase/supabase-js';
import { env } from '../env';
import type { Database } from '../types/database.types';

const { supabaseURL, supabaseKey } = env;

export const supabase = createClient<Database>(supabaseURL, supabaseKey, {
    auth: {
        storage: localStorage,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false,
    }
});