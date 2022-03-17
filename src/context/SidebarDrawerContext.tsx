/** @format */

import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { createContext, ReactNode, useContext, useEffect } from 'react';

type SidebarDrawerContextProps = UseDisclosureReturn;

export const SidebarDrawerContext = createContext(
	{} as SidebarDrawerContextProps
);

interface SidebarDrawerProviderProps {
	children: ReactNode;
}

export default function SidebarDrawerProvider({
	children,
}: SidebarDrawerProviderProps) {
	const disclosure = useDisclosure();
	const route = useRouter();

	useEffect(() => {
		disclosure.onClose();

		//eslint-disable-next-line
	}, [route.asPath]);

	return (
		<SidebarDrawerContext.Provider value={disclosure}>
			{children}
		</SidebarDrawerContext.Provider>
	);
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext);
