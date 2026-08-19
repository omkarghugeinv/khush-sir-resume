const Database = require('better-sqlite3');
const path = require('path');

const db = new Database(path.resolve(__dirname, 'reviews.db'));

const action = process.argv[2];
const id = process.argv[3];

if (action === 'list') {
  const reviews = db.prepare('SELECT id, name, rating, content FROM reviews').all();
  if (reviews.length === 0) {
    console.log("No reviews found.");
  } else {
    console.table(reviews);
  }
} else if (action === 'delete' && id) {
  const result = db.prepare('DELETE FROM reviews WHERE id = ?').run(id);
  if (result.changes > 0) {
    console.log(`✅ Successfully deleted review ID ${id}`);
  } else {
    console.log(`❌ Review ID ${id} not found.`);
  }
} else {
  console.log("🛠️  Review Management Utility");
  console.log("Usage:");
  console.log("  node manage-reviews.js list          # View all reviews and their IDs");
  console.log("  node manage-reviews.js delete <id>   # Delete a specific review by ID");
}
