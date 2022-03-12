import { Route, Switch, BrowserRouter } from "react-router-dom";
import './App.css';
// import Hotelcard from './hotelcard';
// import { ThemeProvider, createTheme } from '@material-ui/core/styles';

import Sign_up from './components/Sign_up/sign_up'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path = '/sign_up' component = { Sign_up }/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
