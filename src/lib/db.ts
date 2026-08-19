import Database from 'better-sqlite3';
import path from 'path';

// Use /tmp on Vercel since the main filesystem is read-only. 
// Note: Data in /tmp is NOT persistent and will clear on serverless cold starts!
const dbDir = process.env.VERCEL ? '/tmp' : process.cwd();
const dbPath = path.resolve(dbDir, 'reviews.db');
const db = new Database(dbPath);

// Initialize the reviews table if it doesn't exist
db.exec(`
  CREATE TABLE IF NOT EXISTS reviews (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    role TEXT,
    content TEXT NOT NULL,
    rating INTEGER DEFAULT 5,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

// Try to add rating column if it's an older db
try {
  db.exec(`ALTER TABLE reviews ADD COLUMN rating INTEGER DEFAULT 5;`);
} catch (e) {
  // column might already exist
}

export interface Review {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  created_at: string;
}

export function getReviews(): Review[] {
  const stmt = db.prepare('SELECT * FROM reviews ORDER BY created_at DESC');
  return stmt.all() as Review[];
}

export function addReview(name: string, role: string, content: string, rating: number = 5): void {
  const stmt = db.prepare('INSERT INTO reviews (name, role, content, rating) VALUES (?, ?, ?, ?)');
  stmt.run(name, role, content, rating);
}
