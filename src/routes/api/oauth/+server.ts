import { auth, githubAuth } from "../../../lib/server/db.server";
import { redirect } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
export const GET: RequestHandler = async ({ cookies }) => {
const [url, state] = await githubAuth.getAuthorizationUrl();
    console.log({state,url})
    cookies.set("github_oauth_state", state, {
        path: "/",
        maxAge: 60 * 60
    });
    // redirect to authorization url
	return new Response(null, {
		status: 302,
		headers: {
			location: url.toString()
		}
	});
}
