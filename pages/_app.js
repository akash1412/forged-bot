import { createGlobalStyle, ThemeProvider } from "styled-components";
import Page from "../components/Page";
import GlobalContextProvider from "../context/globalContext";

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Cabin&display=swap');

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
			<GlobalContextProvider>
				<ThemeProvider theme={theme}>
					<Page>
						<Component {...pageProps} />
					</Page>
				</ThemeProvider>
			</GlobalContextProvider>
		</>
	);
}

export default MyApp;
