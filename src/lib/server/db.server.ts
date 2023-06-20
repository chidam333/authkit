import postgres from "pg";
import { drizzle } from "drizzle-orm/node-postgres";
import lucia from "lucia-auth";
import { pg } from "@lucia-auth/adapter-postgresql";
import { sveltekit } from "lucia-auth/middleware";
import { POSTGRES_URL,GITHUB_CLIENT_ID,GITHUB_CLIENT_SECRET } from "$env/static/private";
import {github} from "@lucia-auth/oauth/providers"
import { dev } from "$app/environment";


const connectionPool = new postgres.Pool({
	connectionString: `${POSTGRES_URL}?ssl=true`
});

export const db = drizzle(connectionPool);
console.log(`db connected`)
export const auth = lucia({
	adapter: pg(connectionPool),
	env: dev ? "DEV" : "PROD",
	middleware: sveltekit(),
	transformDatabaseUser:(userData) =>{
		return {
			userId: userData.id,
			username: userData.username
		}
	}
});
let config = {
	clientId:GITHUB_CLIENT_ID,
	clientSecret:GITHUB_CLIENT_SECRET
}
export const githubAuth = github(auth, config)