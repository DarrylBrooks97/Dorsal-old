import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import {
	Box,
	VStack,
	Flex,
	Input,
	Button,
	Text,
	HStack,
	Link,
	useToast,
} from '@chakra-ui/react';
import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { BsTwitter, BsFacebook } from 'react-icons/bs';
import { validateEmail } from '@/utils/validateEmail';
import { useRouter } from 'next/router';
import { Provider } from '@supabase/supabase-js';
import Supabase from '@/clients/supabase';
import { Credentials } from '@/types';

export default function SignUp(): ReactJSXElement {
	const router = useRouter();
	const toast = useToast();
	const [signUpEmail, setSignUpEmail] = useState<string>('');
	const [password, setPassword] = useState<string>(''); // Password should at least be 6 char
	const supabase = new Supabase();

	const handleProviderSignUp = async (provider: Provider) => {
		const { user, data, error }: any = await supabase.providerAuth(
			provider
		);
		// If data then its successful
		// If message then there was an error
		toast({
			title: `${error}` ?? 'Success',
			status: error ? 'warning' : 'success',
			duration: 5000,
			isClosable: true,
		});
		console.log({ user, data, error });
	};
	const handleEmailSignUp = async ({ email, password }: Credentials) => {
		if (!validateEmail(signUpEmail)) {
			toast({
				title: 'Not a valid email address',
				status: 'warning',
				duration: 5000,
				isClosable: true,
			});
			return;
		}
		const { data, error } = await supabase.signUp({
			email,
			password,
		});

		toast({
			title: `${error}` ?? 'Success',
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
					<Text fontSize="1.3125rem">Become an Aquarist today</Text>
					<VStack w="100%">
						<Input
							placeholder="Email address"
							w="100%"
							_focus={{ borderColor: 'brand.green' }}
							onChange={(e) => {
								setSignUpEmail(e.target.value);
							}}
						/>
						<Input
							placeholder="Password"
							w="100%"
							_focus={{ borderColor: 'brand.green' }}
							onChange={(e) => {
								setPassword(e.target.value);
							}}
							type="password"
						/>
						<Button
							bg="brand.green"
							color="brand.offwhite"
							_hover={{ color: 'brand.yellow' }}
							w="100%"
							onClick={() =>
								handleEmailSignUp({
									email: signUpEmail,
									password,
								})
							}
						>
							Sign up
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
							onClick={() => handleProviderSignUp('google')}
						>
							Continue with Google
						</Button>
						<Button
							leftIcon={<BsFacebook />}
							w="100%"
							onClick={() => handleProviderSignUp('facebook')}
						>
							Continue with Facebook
						</Button>
						<Button
							leftIcon={<BsTwitter />}
							w="100%"
							onClick={() => handleProviderSignUp('twitter')}
						>
							Continue with Twitter
						</Button>
					</VStack>
					<Text fontSize="md">
						Already a member?{' '}
						<Link href="/login" _hover={{ color: 'brand.green' }}>
							Login
						</Link>
					</Text>
				</VStack>
			</Flex>
		</Box>
	);
}
