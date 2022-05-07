import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Verify from './verify';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import { render } from '@testing-library/react';
import Homepage from './components/Homepage/Homepage';
import account_activation from '../src/components/account_activation/account_activation';
import login from './components/Login/Login';
import Sign_up from './components/Sign_up/sign_up';
import Hotelcard from './components/Homepage/layouts/Newhotelcard';
// import Hotelpage2 from "./components/Homepage/layouts/Hotelpage";
import hotelPage from './components/HotelPage/hotelPage';
import Navbar from './components/Homepage/layouts/Navbar';
import Footer from './components/Homepage/layouts/Footer';
import './css/Homepage.css';
import './css/Verify.css';
import './css/Average_rating.css';
import reservation from './components/Reservation/reservation';

function App() {
	return (
		<div className="App">
			<Navbar />
			<BrowserRouter>
				<Switch>
					<Route exact path="/hotelcard" component={Hotelcard} />
					{/* <Route exact path="/hotelpage2" component={Hotelpage2} /> */}
					<Route exact path="/hotelpage/:handle" component={hotelPage} />
					<Route exact path="/verify-email" component={Verify} />
					<Route exact path="/" component={Homepage} />
					<Route exact path="/sign-up" component={Sign_up} />
					<Route exact path="/login" component={login} />
					{/* <Route exact path="/reserve/:id/" component={reservation} /> */}

					<Route
						exact
						path="/reserve/:start_day/:end_day/:price_per_day/:images/:name/:num_passenger/:city/:id"
						component={reservation}
					/>

					<Route exact path="/auth/activate/:handle/:handle1" component={account_activation} />
				</Switch>
			</BrowserRouter>
			<Footer />
		</div>
	);
}

export default App;
