import React from 'react';
import './App.css';
import { BrowserRouter, Redirect, Routes, Route } from 'react-router-dom';

// import Switch from '@material-ui/core/Switch';
import Register2 from './components/sign_up';
import Sign_up from './components/sign_up';

class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<div className="auth-inner ">
					<Routes>
						{/* <Route exact path="/login" component={Login} /> */}
						<Route exact path="/" component={Sign_up} />
					</Routes>
					<div>helllo</div>
				</div>
			</BrowserRouter>
		);
	}
}
export default App;
