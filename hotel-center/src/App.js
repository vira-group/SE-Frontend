import { Route, Switch, BrowserRouter } from "react-router-dom";
import './App.css';
import Hotelcard from './hotelcard';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path = '/' component = { Hotelcard }/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
