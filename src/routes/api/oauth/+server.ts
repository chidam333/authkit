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
    throw redirect(302,url.toString())
}
