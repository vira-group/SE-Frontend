import { Route, Routes, BrowserRouter } from "react-router-dom";
import Homepage from "../components/Homepage/Homepage";
// import Hotelcard from "../components/Homepage/layouts/Newhotelcard";
// import Profile from "../components/Profile/Editprofile";
// import IncreaseCredit from "../components/Profile/IncreaseCredit";
// import Favorites from "../components/Profile/Favorites";
// import Myhotels from "../components/Profile/Myhotels";
// import Edithotel from "../components/AdminPanel/Pages/Edithotel";
// import Statistics from "../components/AdminPanel/Pages/Statistics";
// import RoomsStatus from "../components/AdminPanel/Pages/RoomsStatus";
// import ReservedRooms from "../components/Profile/ReservedRooms";
// import Feedback from "../components/Comment/Feedback";
// import Messages from "../components/AdminPanel/Pages/Messages";

function App() {
  return (
    <div className="App h-100">
      {/* <Navbar /> */}
      <BrowserRouter>
        <Routes>
          {/* <Route exact path="/hotelcard" element={<Hotelcard />} /> */}
          {/* <Route exact path="/profile" element={<Profile />} /> */}
          {/* <Route
            exact
            path="/profile/IncreaseCredit"
            component={IncreaseCredit}
          /> */}
          {/* <Route exact path="/profile/favorites" element={<Favorites />} /> */}
          {/* <Route exact path="/myhotels" element={<Myhotels />} /> */}
          {/* <Route
            exact
            path="/profile/reservedrooms"
            component={ReservedRooms}
          /> */}
          {/* <Route exact path="/hotelpage/:handle" element={<hotelPage />} /> */}
          <Route exact path="/" element={<Homepage />} />
          {/* <Route exact path="/feedback" element={<Feedback />} /> */}
          {/* <Route
            exact
            path="/auth/activate/:handle/:handle1"
            element={<account_activation />}
          /> */}
          {/* <Route
            exact
            path="/reserve/:getin/:getout/:person/:price_per_day/:name/:city/:id"
            element={<reservation />}
          /> */}
          {/* <Route
            exact
            path="/adminpanel/:id/statistics"
            element={<Statistics />}
          /> */}
          {/* <Route
            exact
            path="/adminpanel/:id/edithotel"
            element={<Edithotel />}
          /> */}
          {/* <Route
            exact
            path="/adminpanel/:id/roomsstatus"
            element={<RoomsStatus />}
          /> */}
          {/* <Route exact path="/adminpanel/:id/messages" element={<Messages />} /> */}
        </Routes>
      </BrowserRouter>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
