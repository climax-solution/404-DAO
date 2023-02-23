import { fetchPosts } from '$lib/utils';

export const load = async () => {
	let posts = await fetchPosts();

	return {
		posts
	};
};
