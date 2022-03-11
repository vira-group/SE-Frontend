import { Route, Switch, BrowserRouter } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import "./css/Homepage.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Homepage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
