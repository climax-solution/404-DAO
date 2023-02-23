import { DISCORD_WEBHOOK, WEBHOOK_SECRET } from '$env/static/private';
import type { Metadatum, Nav, Page, Post } from './payload-types';
import { pagesQuery, postsQuery, navQuery, metadataQuery } from './queries';

const CMS_URL =
	process.env.NODE_ENV !== 'production' ? 'https://cms.404dao.io' : 'http://localhost:3000';

export async function gqlQuery<T>(query: string) {
	if (!WEBHOOK_SECRET) {
		throw new Error('WEBHOOK_SECRET env variable not set');
	}


	const res = await (
		await fetch(`${CMS_URL}/api/graphql`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				webhook_secret: WEBHOOK_SECRET as string
			},
			body: JSON.stringify({
				query: query
			})
		})
	).json();

	return res as { data: T };
}

type Collection<Key extends string, V extends any> = { [K in Key]: { docs: V[] } };

type Global<Key extends string, V extends any> = { [K in Key]: V };

export async function fetchPages() {
	const json = await gqlQuery<Collection<'Pages', Page>>(pagesQuery);
	return json.data.Pages.docs;
}

export async function fetchPosts() {
	const json = await gqlQuery<Collection<'Posts', Post>>(postsQuery);
	return json.data.Posts.docs;
}

export async function fetchNav() {

	const json = await gqlQuery<Global<'Nav', Nav>>(navQuery);

	return json.data.Nav.links;
}

export async function fetchMetadata() {
	const json = await gqlQuery<Global<'Metadatum', Metadatum>>(metadataQuery);
	return json.data.Metadatum;
}

export function getContactMessage({
	name,
	organization,
	email,
	message
}: {
	name: string;
	organization: string;
	email: string;
	message: string;
}): string {
	return `
New Contact Form Submission
===========================

Name: ${name}
Organization: ${organization}
Email: ${email}
Message: ${message}
`;
}

export async function sendDiscordMessage(message: string) {
	const resp = await fetch(DISCORD_WEBHOOK, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			content: `
@everyone
	
${message}
			
`
		})
	});
	return resp;
}
