import { UserCredentials } from '@supabase/supabase-js';

export interface Credentials {
	email?: string;
	password?: string;
	provider?: UserCredentials;
}

export interface Login {
	loginEmail: string;
}
