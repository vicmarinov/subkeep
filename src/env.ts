const supabaseURL = process.env.EXPO_PUBLIC_SUPABASE_URL;
if (!supabaseURL || typeof supabaseURL !== 'string') {
    throw new Error('Supabase URL is not defined or is not a string. Please check the environment variables.');
}

const supabaseKey = process.env.EXPO_PUBLIC_SUPABASE_KEY;
if (!supabaseKey || typeof supabaseKey !== 'string') {
    throw new Error('Supabase Key is not defined or is not a string. Please check the environment variables.');
}

export const env = {
    supabaseURL,
    supabaseKey
};