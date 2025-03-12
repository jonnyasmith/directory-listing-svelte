// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
import type { Business } from '$lib/types';

declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		interface PageData {
			business?: Business;
			title?: string;
			description?: string;
		}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
