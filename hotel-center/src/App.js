import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Verify from './verify';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import { render } from '@testing-library/react';
import Homepage from './components/Homepage/Homepage';
import account_activation from '../src/components/account_activation/account_activation';
import login from './components/Login/Login';
import Sign_up from './components/Sign_up/sign_up';
import Hotelcard from './components/Homepage/layouts/Newhotelcard';
import hotelPage from './components/HotelPage/hotelPage';
import Navbar from './components/Homepage/layouts/Navbar';
import Footer from './components/Homepage/layouts/Footer';
import Profile from './components/Profile/Editprofile';
import IncreaseCredit from './components/Profile/IncreaseCredit';
import Favorites from './components/Profile/Favorites';
import Myhotels from './components/Profile/Myhotels';
import reservation from './components/Reservation/reservation';
import Edithotel from './components/AdminPanel/Pages/Edithotel';
import Createroom from './components/AdminPanel/Pages/Createroom';
import Statistics from './components/AdminPanel/Pages/Statistics';
import RoomsStatus from './components/AdminPanel/Pages/RoomsStatus';
import CreateHotel from './components/CreateHotel/CreateHotel';
import steps from './components/CreateHotel/steps';
import './components/AdminPanel/style/adminpanel.scss';
import './components/AdminPanel/style/widget.scss';
import './components/AdminPanel/style/chart.scss';
import './components/AdminPanel/style/roomStatus.scss';
import './css/Navbar.css';
import './css/Homepage.css';
import './css/Verify.css';
import './css/Average_rating.css';
import './css/Profile.css';
import './css/IncreaseCredit.css';
import './css/Favorites.css';
import './css/Reserve.css';
import './css/Hotelpage.css';
import './css/Hotelpage2.css';
import './css/Edithotel.css';
import './css/Edithotel.css';
import Feedback from './components/Comment/Feedback';

function App() {
	return (
		<div className="App h-100">
			<Navbar />
			<BrowserRouter>
				<Switch>
					<Route exact path="/hotelcard" component={Hotelcard} />
					<Route exact path="/profile" component={Profile} />
					<Route exact path="/profile/IncreaseCredit" component={IncreaseCredit} />
					<Route exact path="/profile/favorites" component={Favorites} />
					<Route exact path="/myhotels" component={Myhotels} />
					<Route exact path="/hotelpage/:handle" component={hotelPage} />
					<Route exact path="/verify-email" component={Verify} />
					<Route exact path="/" component={Homepage} />
					<Route exact path="/sign-up" component={Sign_up} />
					<Route exact path="/login" component={login} />
					<Route exact path="/createHotel/steps" component={steps} />
					<Route exact path="/createHotel" component={CreateHotel} />
					<Route exact path="/feedback" component={Feedback} />

					<Route exact path="/auth/activate/:handle/:handle1" component={account_activation} />
					<Route exact path="/reserve/:price_per_day/:name/:city/:id" component={reservation} />
					<Route exact path="/adminpanel/:id/statistics" component={Statistics} />
					<Route exact path="/adminpanel/:id/createrooom" component={Createroom} />
					<Route exact path="/adminpanel/:id/edithotel" component={Edithotel} />
					<Route exact path="/adminpanel/:id/roomsstatus" component={RoomsStatus} />
				</Switch>
			</BrowserRouter>
			<Footer />
		</div>
	);
}

export default App;
