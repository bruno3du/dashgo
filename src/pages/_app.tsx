/** @format */

import { AppProps } from 'next/app';
import * as gtag from '../lib/gtag';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../styles/theme';
import SidebarDrawerProvider from '../context/SidebarDrawerContext';
import { makeServer } from '../services/mirage';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { hotjar } from 'react-hotjar';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Script from 'next/script';

if (process.env.NODE_ENV === 'development') {
	makeServer();
}

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
	const router = useRouter();

	const HJID = 2894769;
	const HJSV = 6;
	useEffect(() => {
		hotjar.initialize(HJID, HJSV);
	}, []);

	return (
		<>
			<Script
				strategy='lazyOnload'
				src='https://www.googletagmanager.com/gtag/js?id=G-HFMS50QZ2H'
			/>
			<Script strategy='lazyOnload'>
				{`
		  window.dataLayer = window.dataLayer || [];
			function gtag(){dataLayer.push(arguments);}
			gtag('js', new Date());
		
			gtag('config', 'G-HFMS50QZ2H');
					`}
			</Script>

			<QueryClientProvider client={queryClient}>
				<ReactQueryDevtools />
				<ChakraProvider theme={theme}>
					<SidebarDrawerProvider>
						<Component {...pageProps} />
					</SidebarDrawerProvider>
				</ChakraProvider>
			</QueryClientProvider>
		</>
	);
}

export default MyApp;
