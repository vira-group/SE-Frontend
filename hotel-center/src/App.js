import { Route, Switch, BrowserRouter } from "react-router-dom";
import Verify from './verify';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import { render } from '@testing-library/react';
import Homepage from "./components/Homepage/Homepage";
import account_activation from '../src/components/account_activation/account_activation';
import login from './components/Login/Login';
import Sign_up from './components/Sign_up/sign_up';
import Hotelcard from "./components/Homepage/layouts/Newhotelcard";
import Hotelpage2 from "./components/Homepage/layouts/Hotelpage";
import "./css/Homepage.css";
import './css/Verify.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path = '/hotelcard' component = { Hotelcard }/>
          <Route exact path = '/hotelpage2' component = { Hotelpage2 }/>
          <Route exact path= '/verify-email' component= { Verify }/>
          <Route exact path="/" component={Homepage} />
          <Route exact path = '/sign-up' component = { Sign_up }/>
					<Route exact path="/login" component={login} />
					<Route exact path="/auth/activate/:handle/:handle1" component={account_activation}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;