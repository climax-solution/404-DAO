import { fetchPosts } from '$lib/utils';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	let posts = await fetchPosts();

	for (let post of posts) {
		if (post.id.toLowerCase() === params.blogId.toLowerCase()) {
			return {
				post
			};
		}
	}

	throw error(404);
};
