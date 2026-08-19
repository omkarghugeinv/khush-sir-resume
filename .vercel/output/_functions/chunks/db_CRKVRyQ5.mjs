import { createClient } from "@supabase/supabase-js";
//#region src/lib/db.ts
var supabaseUrl = (typeof import.meta !== "undefined" && Object.assign({
	"ASSETS_PREFIX": void 0,
	"BASE_URL": "/",
	"DEV": false,
	"MODE": "production",
	"PROD": true,
	"SITE": void 0,
	"SSR": true
}, { PUBLIC: "C:\\Users\\Public" }) ? Object.assign({
	"ASSETS_PREFIX": void 0,
	"BASE_URL": "/",
	"DEV": false,
	"MODE": "production",
	"PROD": true,
	"SITE": void 0,
	"SSR": true
}, { PUBLIC: "C:\\Users\\Public" }).PUBLIC_SUPABASE_URL : "") || process.env.PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
var supabaseKey = (typeof import.meta !== "undefined" && Object.assign({
	"ASSETS_PREFIX": void 0,
	"BASE_URL": "/",
	"DEV": false,
	"MODE": "production",
	"PROD": true,
	"SITE": void 0,
	"SSR": true
}, { PUBLIC: "C:\\Users\\Public" }) ? Object.assign({
	"ASSETS_PREFIX": void 0,
	"BASE_URL": "/",
	"DEV": false,
	"MODE": "production",
	"PROD": true,
	"SITE": void 0,
	"SSR": true
}, { PUBLIC: "C:\\Users\\Public" }).PUBLIC_SUPABASE_ANON_KEY : "") || process.env.PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_KEY;
var supabase = createClient(supabaseUrl || "https://placeholder.supabase.co", supabaseKey || "placeholder");
async function getReviews() {
	const { data, error } = await supabase.from("reviews").select("*").order("created_at", { ascending: false });
	if (error) {
		console.error("Error fetching reviews:", error);
		return [];
	}
	return data;
}
async function addReview(name, role, content, rating = 5) {
	const { error } = await supabase.from("reviews").insert([{
		name,
		role,
		content,
		rating
	}]);
	if (error) console.error("Error adding review:", error);
}
//#endregion
export { getReviews as n, addReview as t };
