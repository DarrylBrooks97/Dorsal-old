import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { Box, VStack, Flex, Input, Button, Text } from '@chakra-ui/react';

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
			<Flex w="300px" h="600px" /*bg="blue"*/ p="10px">
				<VStack /*bg="green"*/ w="100%">
					<Text fontSize="6xl">Dorsal 🦈</Text>
					<Text fontSize="1.3125rem">Become an Aquarist Today</Text>
					<VStack w="100%">
						<Input placeholder="Email address" w="100%" />
						<Input placeholder="Password" w="100%" />
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
						<Button w="100%">Continue with Google</Button>
						<Button w="100%">Continue with Facebook</Button>
						<Button w="100%">Continue with Twitter</Button>
					</VStack>
				</VStack>
			</Flex>
		</Box>
	);
}
