/** @format */

import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

interface ProfileProps {
	showProfileData?: boolean;
}

export default function Profile({ showProfileData = true }: ProfileProps) {
	return (
		<Flex align='center'>
			{showProfileData && (
				<Box mr='4' textAlign={'right'}>
					<Text>Bruno Eduardo</Text>
					<Text color='gray.300' fontSize='small'>
						bruno@bruno.com
					</Text>
				</Box>
			)}

			<Avatar size='md' name='Bruno Eduardo' />
		</Flex>
	);
}
