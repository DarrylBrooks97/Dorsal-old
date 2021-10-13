import {
	createClient,
	PostgrestResponse,
	SupabaseClient,
	Provider,
} from '@supabase/supabase-js';
import { Credentials } from 'types';

export default class Supabase {
	client: SupabaseClient;

	constructor() {
		const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
		const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;

		this.client = createClient(
			supabaseUrl as string,
			supabaseKey as string
		);
	}

	async signUp({ email, password }: Credentials) {
		const { data, error } = await this.client.auth.signUp({
			email: email,
			password: password,
		});

		return { data, error };
	}

	async login({email,password}:Credentials) {
		const { user, session, error } = await this.client.auth.signIn({
			provider: 'google',
		});
		console.log({ user, session, error });
		return { user, session, error };
	}
	async providerAuth(provider:Provider) {
		const { user, session, error } = await this.client.auth.signIn({
			provider,
		},{redirectTo:'/'});
		return { user, error, session };
	}
	async getAll(table: string) {
		const {
			data: fish,
			error,
		}: PostgrestResponse<any> = await this.client.from(table).select('*');

		return { fish, error };
	}
}
