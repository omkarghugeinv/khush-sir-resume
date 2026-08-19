import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { t as addReview } from "./db_B0GqMx6A.mjs";
//#region src/pages/api/review.ts
var review_exports = /* @__PURE__ */ __exportAll({ POST: () => POST });
var POST = async ({ request, redirect }) => {
	try {
		const data = await request.formData();
		const name = data.get("name")?.toString();
		const role = data.get("role")?.toString() || "";
		const content = data.get("content")?.toString();
		const rating = parseInt(data.get("rating")?.toString() || "5", 10);
		if (name && content) {
			await addReview(name, role, content, rating);
			return redirect("/?review_success=1#reviews", 303);
		}
	} catch (e) {
		console.error(e);
	}
	return new Response("Bad Request", { status: 400 });
};
//#endregion
//#region \0virtual:astro:page:src/pages/api/review@_@ts
var page = () => review_exports;
//#endregion
export { page };
