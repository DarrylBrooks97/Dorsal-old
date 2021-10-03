import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const breakpoints = createBreakpoints({
	sm: '320px',
	md: '768px',
	lg: '920px',
	xl: '1200px',
});

export const theme = extendTheme({
	colors: {
		brand: {
			background: '#F6F6F6',
			offwhite: '#F6F6F6',
			blue: '#008AB7',
			yellow: '#E9C46A',
			green: '#009081',
		},
	},
	fonts: {
		heading: 'Gentium Basic',
		body: 'Gentium Basic',
		subtitle: 'Gentium Basic',
	},
	breakpoints,
});
