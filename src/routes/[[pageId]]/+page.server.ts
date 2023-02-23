import { fetchPages } from '$lib/utils';
import { error } from '@sveltejs/kit';
import type { PageData, PageLoad } from './$types';
import type { Page } from 'lib/payload-types';

export const load: PageLoad = async ({ params }): Promise<{ page: Page }> => {
	let pages = await fetchPages();

	// Make index page home page
	if (params.pageId === undefined) {
		params.pageId = 'home';
	}

	for (let page of pages) {
		if (!page.slug || !params.pageId) {
			continue;
		}
		if (page.slug.toLowerCase() === params.pageId.toLowerCase()) {
			return {
				page
			};
		}
	}

	throw error(404);
};
