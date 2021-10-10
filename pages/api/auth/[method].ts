import type { NextApiRequest, NextApiResponse } from 'next';
import Supabase from '@/clients/supabase';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { method } = req.query;
	const supabase = new Supabase();

	switch (method) {
		case 'signup':
			if (req.method !== 'POST') res.status(400);
			const { email, password } = req.body;
			const { data: userSignup, error: err } = await supabase.signUp({
				email,
				password,
			});

			res.status(200).json({
				data: userSignup,
				err,
				message: err?.message,
			});

			break;
		case 'login':
			if (req.method !== 'POST') res.status(400);
			const { loginEmail } = req.body;
			const { user: userData, error } = await supabase.login(loginEmail);
			res.status(200).json({ userData, error, message: error?.message });
			break;
		case 'reset':
			res.end(`${method}`);
			break;
		default:
			res.end('');
			break;
	}
}
