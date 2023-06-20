// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			auth: import("lucia-auth").AuthRequest
		}
		// interface PageData {}
		// interface Platform {}
	}
}
/// <reference types="lucia-auth" />
declare global {
	namespace Lucia {
		type Auth = import("$lib/server/db.server.js").Auth;
		type UserAttributes = {
			username:string;
		};
	}
}


export {};
