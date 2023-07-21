import { BrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { AppRoutes } from "./routes/route";
import { Header } from "./components/header";

export const App = () => {
	return (
		<>
			<GlobalStyle />

			<BrowserRouter>
				<Header />
				<AppRoutes />
			</BrowserRouter>
		</>
	);
}

const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		border: none;
		outline: none;
		box-sizing: border-box;
	}

	a {
		text-decoration: none;
	}

	ul {
		list-style: none;
	}
	
	img {
		max-width: 100%;
	}
`

