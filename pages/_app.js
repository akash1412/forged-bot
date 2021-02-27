import { createGlobalStyle, ThemeProvider } from "styled-components";

import Page from "../components/Page";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap');
  *,*::after,*::before{
      box-sizing:inherit;
  }

body{
	margin: 0;
    padding: 0;
    box-sizing: border-box;
	font-family: 'Cabin', sans-serif;
}

html{
	font-family: 'Cabin', sans-serif;
}



`;

const theme = {
	color: {
		purple: "#5B1175",
		deepBlue: "#02244A",
		lighBlue: "#6ED0DD",
		orange: "#DF622C",
	},
};

function MyApp({ Component, pageProps }) {
	return (
		<>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<Page>
					<Component {...pageProps} />
				</Page>
			</ThemeProvider>
		</>
	);
}

export default MyApp;
