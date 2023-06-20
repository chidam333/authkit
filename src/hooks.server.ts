import { db,auth } from "$lib/server/db.server.js";
import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
	event.locals.db = db;
	console.log({auth,event})
	event.locals.auth = auth.handleRequest(event);
	console.log({auth2:event.locals.auth})
	return resolve(event);
};	