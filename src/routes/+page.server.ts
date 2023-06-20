import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import {auth} from "../lib/server/db.server"

export const load: PageServerLoad = async ({ locals }) => {
	const { user } = await locals.auth.validateUser();
	if (!user) throw redirect(302, "/login");
	return {
		user
	};
};

import { type Actions, fail } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const actions: Actions = {
	logout: async ({ locals }) => {
		console.log({auth:locals.auth})
		const { session } = await locals.auth.validateUser();
		if (!session) return fail(401);
		await auth.invalidateSession(session.sessionId); // invalidate session
		locals.auth.setSession(null); // remove cookie
	}
};
