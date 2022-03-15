import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import account_activation from '../src/components/account_activation/account_activation';

import login from './components/Login/Login';

function App() {
	return (
		<div>
			<BrowserRouter>
				<Switch>
					<Route exact path="/login" component={login} />
					<Route exact path="/auth/activate/:handle/:handle1" component={account_activation}/>
				</Switch>

			</BrowserRouter>
		</div>
	);
}

export default App;
