import Navbar from 'components/Navbar/Navbar';
import Catalog from 'pages/Catalog/Catalog';
import Home from 'pages/Home/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

export default function Routes() {
	return (
		<BrowserRouter>
			<Navbar />
			<Switch>
				<Route path="/" exact>
					<Home />
				</Route>
				<Route path="/products">
					<Catalog />
				</Route>
			</Switch>
		</BrowserRouter>
	);
}
