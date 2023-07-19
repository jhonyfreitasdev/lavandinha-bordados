import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/route";
import { Header } from "./components/header";

export const App = () => {
	return (
		<BrowserRouter>
			<Header />
			<AppRoutes />
		</BrowserRouter>
	);
}