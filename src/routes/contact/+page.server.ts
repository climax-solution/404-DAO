// I'll add mutation for contact
// what are the fields? I'll look now

import { subscriberMutation, contactMutation } from 'lib/queries';
import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';
import { getContactMessage, gqlQuery, sendDiscordMessage } from 'lib/utils';

/* 
If this doesn't work get mad at chatgpt
If this does work give me all the praise
This is our future
*/ 
type ApiResponse = {
	errors?: {
	  message: string;
	  locations: any[];
	  path: any[];
	  extensions: Record<string, any>;
	}[];
	data: {
	  createContactFormSubmission?: null | any;
	  createSubscriberFormSubmission?: null | any;
	  // Add more keys as needed
	};
  };


export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		// TODO add validation to front end?
		const name = data.get('name');
		const organization = data.get('organization');
		const email = data.get('email');
		const message = data.get('message');

		// Hidden field
		const type = data.get('type');
	
		if (type === 'contact') {
			let resp1 = await sendDiscordMessage(
				getContactMessage({
					name: name as string, 
					organization: organization as string, 
					email: email as string, 
					message: message as string
				})
			)

			const mutation = contactMutation({
				fullName: name as string,
				organization: organization as string,
				email: email as string, 
				message: message as string
			});

			const resp: ApiResponse = await gqlQuery(mutation);

			if (resp.data.createContactFormSubmission) {
				return {
					success: true
				}
			} else {
				let message = '';
				resp.errors?.forEach((o) => {
					message += `${o.message}\n`;
				})
				sendDiscordMessage(`contactFormSubmission Failed:\n${message}`)
				return fail(500, {
					message: message
				}); // we don't support this yet
			}
		} else if (type === 'subscribe') {
			let rr = await sendDiscordMessage(`New subscriber:\nEmail: ${email}`)

			const mutation = subscriberMutation(email as string);
			const resp: ApiResponse = await gqlQuery(mutation);

			if (resp.data.createSubscriberFormSubmission) {
				return {
					success: true
				}
			} else {
				let message = '';
				resp.errors?.forEach((o) => {
					message += `${o.message}\n`;
				})
				await sendDiscordMessage(`subscriberFormSubmission Failed:\n${message}`)
				return fail(500, {
					message: message
				}); // we don't support this yet
			}
		} else {
			// Error
			return fail(400);
		}
	}
};
