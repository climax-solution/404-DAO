import { fetchNav, fetchMetadata, fetchPosts } from '$lib/utils';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async () => {

    let nav = await fetchNav()
    let metadata = await fetchMetadata()
    return {
        nav,
        metadata
    }
}