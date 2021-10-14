import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import {
	Box,
	VStack,
	Flex,
	Input,
	Button,
	Text,
	HStack,
	useToast,
	Link,
} from '@chakra-ui/react';
import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { BsTwitter, BsFacebook } from 'react-icons/bs';
import { validateEmail } from '@/utils/validateEmail';
import { useRouter } from 'next/router';
import { Provider } from '@supabase/supabase-js';
import { Credentials } from '@/types';
import Supabase from '@/clients/supabase';

export default function Login(): ReactJSXElement {
	const router = useRouter();
	const toast = useToast();
	const [loginEmail, setLoginEmail] = useState<string>('');
	const supabase = new Supabase();

	const handleProviderLogin = async (provider: Provider) => {
		const { user, data, error }: any = await supabase.providerAuth(
			provider
		);
		console.log({ user, data, error });
		// If data then its successful
		// If message then there was an error
		toast({
			title: error ?? 'Success',
			status: error ? 'warning' : 'success',
			duration: 5000,
			isClosable: true,
		});
		console.log({ user, data, error });
	};
	const handleEmailLogin = async ({ email }: Credentials) => {
		if (!validateEmail(loginEmail)) {
			toast({
				title: 'Not a valid email address',
				status: 'warning',
				duration: 5000,
				isClosable: true,
			});
			return;
		}
		const { error } = await supabase.login({
			email,
		});

		toast({
			title: error ?? 'Check your email for login !',
			status: error ? 'warning' : 'success',
			duration: 5000,
			isClosable: true,
		});
	};
	return (
		<Box
			h="90vh"
			display="flex"
			alignItems="center"
			justifyContent="center"
			bg="brand.offwhite"
		>
			<Flex w="300px" h="600px" borderRadius="25px">
				<VStack w="100%" p="2px">
					<Text fontSize="6xl">Dorsal 🦈</Text>
					<VStack w="100%" spacing={5}>
						<Input
							placeholder="Email address"
							w="100%"
							_focus={{ borderColor: 'brand.green' }}
							onChange={(e) => {
								setLoginEmail(e.target.value);
							}}
						/>
						<Button
							bg="brand.green"
							color="brand.offwhite"
							_hover={{ color: 'brand.yellow' }}
							w="100%"
							onClick={() =>
								handleEmailLogin({
									email: loginEmail,
								})
							}
						>
							Login
						</Button>
					</VStack>
					<HStack justify="space-between" w="100%" pt="10px">
						<Box h={1} w="33%" bgColor="gray.300"></Box>
						<Text fontSize="lg">Or</Text>
						<Box h={1} w="33%" bgColor="gray.300"></Box>
					</HStack>
					<HStack>
						<Box h="1px" borderColor="black"></Box>or
						<Box h="1px" borderColor="black"></Box>
					</HStack>
					<VStack w="100%" p="10px 0px">
						<Button
							leftIcon={<FcGoogle />}
							w="100%"
							onClick={() => handleProviderLogin('google')}
						>
							Continue with Google
						</Button>
						<Button
							leftIcon={<BsFacebook />}
							w="100%"
							onClick={() => handleProviderLogin('facebook')}
						>
							Continue with Facebook
						</Button>
						<Button
							leftIcon={<BsTwitter />}
							w="100%"
							onClick={() => handleProviderLogin('twitter')}
						>
							Continue with Twitter
						</Button>
					</VStack>
					<Text fontSize="md">
						Don't have an account?{' '}
						<Link href="/signup" _hover={{ color: 'brand.green' }}>
							Sign up
						</Link>
					</Text>
				</VStack>
			</Flex>
		</Box>
	);
}
