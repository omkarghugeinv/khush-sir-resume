import { createClient } from '@supabase/supabase-js';

const getEnv = (key: string) => {
  if (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env[key]) {
    return import.meta.env[key];
  }
  if (typeof process !== 'undefined' && process.env && process.env[key]) {
    return process.env[key];
  }
  return '';
};

const supabaseUrl = getEnv('PUBLIC_SUPABASE_URL') || getEnv('SUPABASE_URL');
const supabaseKey = getEnv('PUBLIC_SUPABASE_ANON_KEY') || getEnv('SUPABASE_KEY');

const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co', 
  supabaseKey || 'placeholder'
);

export interface Review {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  created_at: string;
}

export async function getReviews(): Promise<Review[]> {
  try {
    const { data, error } = await supabase
      .from('reviews')
      .select('*')
      .order('created_at', { ascending: false });
      
    if (error) {
      console.error('Error fetching reviews:', error);
      return [];
    }
    return (data as Review[]) || [];
  } catch (e) {
    console.error('Exception fetching reviews:', e);
    return [];
  }
}

export async function addReview(name: string, role: string, content: string, rating: number = 5): Promise<void> {
  try {
    const { error } = await supabase
      .from('reviews')
      .insert([
        { name, role, content, rating }
      ]);
      
    if (error) {
      console.error('Error adding review:', error);
      throw error;
    }
  } catch (e) {
    console.error('Exception adding review:', e);
    throw e;
  }
}
