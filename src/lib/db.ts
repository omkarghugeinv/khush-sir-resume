import { createClient } from '@supabase/supabase-js';

// Use import.meta.env for Astro, with fallbacks for Node.js scripts
const supabaseUrl = 
  (typeof import.meta !== 'undefined' && import.meta.env ? import.meta.env.PUBLIC_SUPABASE_URL : '') || 
  process.env.PUBLIC_SUPABASE_URL || 
  process.env.SUPABASE_URL;

const supabaseKey = 
  (typeof import.meta !== 'undefined' && import.meta.env ? import.meta.env.PUBLIC_SUPABASE_ANON_KEY : '') || 
  process.env.PUBLIC_SUPABASE_ANON_KEY || 
  process.env.SUPABASE_KEY;

export const supabase = createClient(
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
  const { data, error } = await supabase
    .from('reviews')
    .select('*')
    .order('created_at', { ascending: false });
    
  if (error) {
    console.error('Error fetching reviews:', error);
    return [];
  }
  return data as Review[];
}

export async function addReview(name: string, role: string, content: string, rating: number = 5): Promise<void> {
  const { error } = await supabase
    .from('reviews')
    .insert([
      { name, role, content, rating }
    ]);
    
  if (error) {
    console.error('Error adding review:', error);
  }
}
