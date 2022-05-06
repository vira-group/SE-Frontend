import { Route, Switch, BrowserRouter } from "react-router-dom";
import Verify from "./verify";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import { render } from "@testing-library/react";
import Homepage from "./components/Homepage/Homepage";
import account_activation from "../src/components/account_activation/account_activation";
import login from "./components/Login/Login";
import Sign_up from "./components/Sign_up/sign_up";
import Hotelcard from "./components/Homepage/layouts/Newhotelcard";
// import Hotelpage2 from "./components/Homepage/layouts/Hotelpage";
import hotelPage from "./components/HotelPage/hotelPage";
import Navbar from "./components/Homepage/layouts/Navbar";
import Footer from "./components/Homepage/layouts/Footer";
import Profile from "./components/Profile/Editprofile";
import IncreaseCredit from "./components/Profile/IncreaseCredit";
import Favorites from "./components/Profile/Favorites";
import Myhotels from "./components/Profile/Myhotels";
import Createhotel from "./components/Createhotel/Createhotel";
import "./css/Navbar.css";
import "./css/Homepage.css";
import "./css/Verify.css";
import "./css/Average_rating.css";
import "./css/Profile.css";
import "./css/IncreaseCredit.css";
import "./css/Favorites.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Route exact path="/hotelcard" component={Hotelcard} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/createhotel" component={Createhotel} />
          <Route
            exact
            path="/profile/IncreaseCredit"
            component={IncreaseCredit}
          />
          <Route exact path="/profile/favorites" component={Favorites} />
          <Route exact path="/myhotels" component={Myhotels} />
          <Route exact path="/hotelpage/:handle" component={hotelPage} />
          <Route exact path="/verify-email" component={Verify} />
          <Route exact path="/" component={Homepage} />
          <Route exact path="/sign-up" component={Sign_up} />
          <Route exact path="/login" component={login} />
          <Route
            exact
            path="/auth/activate/:handle/:handle1"
            component={account_activation}
          />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
