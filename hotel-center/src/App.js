import { Route, Switch, BrowserRouter } from "react-router-dom";
import Hotelcard from './components/Homepage/layouts/Hotelcard';
import Verify from './verify';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import { render } from '@testing-library/react';
import Homepage from "./components/Homepage/Homepage";
import account_activation from '../src/components/account_activation/account_activation';
import login from './components/Login/Login';
import Sign_up from './components/Sign_up/sign_up';
import "./css/Homepage.css";
import './css/Verify.css';
import hotelPage from "./components/HotelPage/hotelPage";
import a from "./components/HotelPage/a";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {/* <Route exact path = '/' component = { Hotelcard }/> */}
          <Route exact path= '/verify-email' component= { Verify }/>
          <Route exact path="/" component={Homepage} />
          <Route exact path = '/sign-up' component = { Sign_up }/>
					<Route exact path="/login" component={login} />
					<Route exact path="/auth/activate/:handle/:handle1" component={account_activation}/>

        	<Route exact path = '/hotelPage/:handle' component = { hotelPage }/>
        	<Route exact path = '/a' component = { a }/>
					
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;