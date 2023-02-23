import type { Page, Post } from './payload-types';

type ElementType<T> = T extends (infer U)[] ? U : never;
type Block = ElementType<Post['content'] | Page['sections']>;

export type BlockByType<T extends Block['blockType']> = T extends Block['blockType']
	? Extract<Block, { blockType: T }>
	: never;
