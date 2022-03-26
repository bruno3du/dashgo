/** @format */

import Documents, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Documents {
	render(): JSX.Element {
		return (
			<Html>
				<Head>
					<link rel='preconnect' href='https://fonts.googleapis.com' />
					<link
						rel='preconnect'
						href='https://fonts.gstatic.com'
						crossOrigin='true'
					/>
					<link href='https://www.googletagmanager.com/gtag/js?id=G-HFMS50QZ2H'></link>
					<script
						dangerouslySetInnerHTML={{
							__html: `
							window.dataLayer = window.dataLayer || [];
							function gtag(){dataLayer.push(arguments);}
							gtag('js', new Date());
							gtag('config', 'G-HFMS50QZ2H');
							`,
						}}></script>
					<link
						href='https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Roboto:ital,wght@0,400;0,700;1,400&display=swap'
						rel='stylesheet'
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
