import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
const supabaseKey = process.env.PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("❌ Error: Supabase credentials not found.");
  console.error("Please set PUBLIC_SUPABASE_URL and PUBLIC_SUPABASE_ANON_KEY environment variables.");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

const action = process.argv[2];
const id = process.argv[3];

async function main() {
  if (action === 'list') {
    const { data: reviews, error } = await supabase.from('reviews').select('id, name, rating, content');
    
    if (error) {
      console.error("❌ Error fetching reviews:", error);
      return;
    }
    
    if (!reviews || reviews.length === 0) {
      console.log("No reviews found.");
    } else {
      console.table(reviews);
    }
  } else if (action === 'delete' && id) {
    const { error } = await supabase.from('reviews').delete().eq('id', id);
    
    if (error) {
      console.error(`❌ Error deleting review ID ${id}:`, error);
    } else {
      console.log(`✅ Successfully deleted review ID ${id} (if it existed)`);
    }
  } else {
    console.log("🛠️  Review Management Utility (Supabase)");
    console.log("Usage:");
    console.log("  (Windows PowerShell)");
    console.log("  $env:PUBLIC_SUPABASE_URL=\"your_url\"");
    console.log("  $env:PUBLIC_SUPABASE_ANON_KEY=\"your_key\"");
    console.log("  node manage-reviews.js list          # View all reviews and their IDs");
    console.log("  node manage-reviews.js delete <id>   # Delete a specific review by ID");
  }
}

main();
