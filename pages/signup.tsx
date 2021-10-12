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
} from '@chakra-ui/react';
import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { BsTwitter, BsFacebook } from 'react-icons/bs';
import { validateEmail } from '@/utils/validateEmail';
import { useRouter } from 'next/router';
import axios from 'axios';

export default function SignUp(): ReactJSXElement {
	const router = useRouter();
	const toast = useToast();
	const [signUpEmail, setSignUpEmail] = useState<string>('');
	const [password, setPassword] = useState<string>(''); // Password should at least be 6 char

	const handleSignUpClick = async () => {
		if (!validateEmail(signUpEmail)) {
			console.log('not a valid email');
			toast({
				title: 'Not a valid email address',
				status: 'warning',
				duration: 5000,
				isClosable: true,
			});
			return;
		}
		try {
			const { data, err, message }: any = await (
				await axios.post('/api/auth/signup', {
					email: signUpEmail,
					password: password,
				})
			).data;
			// If data then its successful
			// If message then there was an error
			toast({
				title: `${err}` ?? 'Success',
				status: err ? 'warning' : 'success',
				duration: 5000,
				isClosable: true,
			});
			console.log({ data, err, message });
		} catch (error) {
			console.log('Error: ' + error);
		}
	};
	const handleLoginClick = async () => {
		if (!validateEmail(signUpEmail)) {
			console.log('not a valid email');
			return;
		}
		try {
			// If data and error are undefined = 200
			const { data, error }: any = await (
				await axios.post('/api/auth/login', {
					signUpEmail,
				})
			).data;
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<Box
			/*bg="red"*/
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
							onClick={() => handleSignUpClick()}
						>
							Sign up
						</Button>
					</VStack>
					<HStack>
						<Box h="1px" borderColor="black"></Box>or
						<Box h="1px" borderColor="black"></Box>
					</HStack>
					<VStack w="100%" p="50px 0px">
						<Button leftIcon={<FcGoogle />} w="100%">
							Continue with Google
						</Button>
						<Button leftIcon={<BsFacebook />} w="100%">
							Continue with Facebook
						</Button>
						<Button leftIcon={<BsTwitter />} w="100%">
							Continue with Twitter
						</Button>
					</VStack>
				</VStack>
			</Flex>
		</Box>
	);
}
