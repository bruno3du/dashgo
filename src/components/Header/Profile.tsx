/** @format */

import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

export default function Profile() {
	return (
		<Flex align='center'>
			<Box mr='4' textAlign={'right'}>
				<Text>Bruno Eduardo</Text>
				<Text color='gray.300' fontSize='small'>
					bruno@bruno.com
				</Text>
			</Box>

			<Avatar size='md' name='Bruno Eduardo' />
		</Flex>
	);
}
