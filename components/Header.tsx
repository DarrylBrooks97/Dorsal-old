import {
	Box,
	HStack,
	Spacer,
	Button,
	Image,
	ButtonGroup,
} from '@chakra-ui/react';

export default function Header() {
	return (
		<Box w="100%" h="auto">
			<HStack direction={{ base: 'column', md: 'row' }}>
				<Image
					src="logo.png"
					pl={2}
					w={{ base: '64px', lg: '64px' }}
					h={{ base: '64px', lg: '64px' }}
					alt="logo"
				/>
				<Spacer />
				<ButtonGroup spacing={2} pr={2}>
					<Button
						bg="brand.offwhite"
						color="black"
						border="2px"
						borderColor="brand.green"
						_hover={{ color: 'brand.green' }}
					>
						Login
					</Button>
					<Button
						bg="brand.green"
						color="brand.offwhite"
						_hover={{ color: 'brand.yellow' }}
					>
						Sign up
					</Button>
				</ButtonGroup>
			</HStack>
		</Box>
	);
}
