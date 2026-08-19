import type { APIRoute } from 'astro';
import { addReview } from '../../lib/db';

export const POST: APIRoute = async ({ request, redirect }) => {
  try {
    const data = await request.formData();
    const name = data.get('name')?.toString();
    const role = data.get('role')?.toString() || '';
    const content = data.get('content')?.toString();
    const rating = parseInt(data.get('rating')?.toString() || '5', 10);

    if (name && content) {
      await addReview(name, role, content, rating);
      return redirect('/?review_success=1#reviews', 303);
    }
  } catch (e) {
    console.error(e);
  }
  return new Response('Bad Request', { status: 400 });
};
