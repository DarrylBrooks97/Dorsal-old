import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { Box, VStack, Flex, Input, Button, Text } from '@chakra-ui/react';
import { FcGoogle } from 'react-icons/fc';
import { BsTwitter, BsFacebook } from 'react-icons/bs';

export default function SignUp(): ReactJSXElement {
	return (
		<Box
			/*bg="red"*/
			h="100vh"
			display="flex"
			alignItems="center"
			justifyContent="center"
			bg="brand.offwhite"
		>
			<Flex
				w="300px"
				h="600px"
				/*bg="blue"*/ p="10px"
				// bg="rgba(136, 150, 150, 0.8)"
				borderRadius="25px"
			>
				<VStack /*bg="green"*/ w="100%" p="2px">
					<Text fontSize="6xl">Dorsal 🦈</Text>
					<Text fontSize="1.3125rem">Become an Aquarist today</Text>
					<VStack w="100%">
						<Input
							placeholder="Email address"
							w="100%"
							_focus={{ bordercolor: 'brand.green' }}
						/>
						<Input
							placeholder="Password"
							w="100%"
							_focus={{ borderColor: 'brand.green' }}
						/>
						<Button
							bg="brand.green"
							color="brand.offwhite"
							_hover={{ color: 'brand.yellow' }}
							w="100%"
						>
							Sign up
						</Button>
					</VStack>
					<hr />
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
