import { fail, redirect } from "@sveltejs/kit";
import type { PageServerLoad, Actions } from "./$types";
import {auth} from "../../lib/server/db.server"

// If the user exists, redirect authenticated users to the profile page.
export const load: PageServerLoad = async ({ locals }) => {
		const { session } = await locals.auth.validateUser();
		console.log({session})
		if (session){
			throw redirect(302, "/");
		}	
};

export const actions: Actions = {
	login: async ({ request, locals }) => {
		const form = await request.formData();
		const username = form.get("username");
		const password = form.get("password");
		if (typeof username !== "string" || typeof password !== "string")
			return fail(400);
		try {
			const key = await auth.useKey("username", username, password);
			const session = await auth.createSession(key.userId);
			locals.auth.setSession(session);
		} catch {
			return fail(400);
		}
	}
};
