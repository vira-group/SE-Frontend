import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';

import login from './components/Login/Login';

function App() {
	return (
		<div>
			<BrowserRouter>
				<Switch>
					<Route exact path="/login" component={login} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
