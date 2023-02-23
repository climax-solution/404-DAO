import type { Page, Post } from './payload-types';

export type GenericBlock = (Page['sections'] | Post['content'])[number];
