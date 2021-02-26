import { createGlobalStyle, ThemeProvider } from "styled-components";

import Page from "../components/Page";

const GlobalStyle = createGlobalStyle`
  *,*::after,*::before{
      box-sizing:inherit;
  }

body{
	margin: 0;
    padding: 0;
    box-sizing: border-box;
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
