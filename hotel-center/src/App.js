import { Route, Switch, BrowserRouter } from "react-router-dom";
import './App.css';
import Hotelcard from './hotelcard';
import Verify from './verify';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import { render } from '@testing-library/react';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path = '/' component = { Hotelcard }/>
          <Route exact path= '/verify-email' component= { Verify }/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;