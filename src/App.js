import { BrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { AppRoutes } from "./routes/route";
import { Header } from "./components/header";
import { FilterProvider } from "./context/filter-products";
import { CartProvider } from "./context/cart";

export const App = () => {
	return (
		<FilterProvider>
			<CartProvider>
				<GlobalStyle />

				<BrowserRouter>
					<Header />
					<AppRoutes />
				</BrowserRouter>
			</CartProvider>
		</FilterProvider>
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

