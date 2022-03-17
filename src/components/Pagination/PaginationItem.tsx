/** @format */

import { Button } from '@chakra-ui/react';

interface PaginationItemProps {
	isCurrent?: boolean;
	number: number;
}

export default function PaginationItem({
	isCurrent = false,
	number,
}: PaginationItemProps) {
	return isCurrent ? (
		<Button
			size='sm'
			fontSize='xs'
			w='4'
			colorScheme='pink'
			disabled
			_disabled={{
				bgColor: 'pink.500',
				cursor: 'default',
			}}>
			{number}
		</Button>
	) : (
		<Button
			size='sm'
			fontSize='xs'
			w='4'
			bg='gray.700'
			_hover={{
				bgColor: 'gray.500',
			}}>
			{number}
		</Button>
	);
}
