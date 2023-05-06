import { Route, Routes, BrowserRouter } from "react-router-dom";
import Homepage from "../components/Homepage/Homepage";
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
          <Route exact path="/" element={<Homepage />} />
          {/* <Route exact path="/feedback" element={<Feedback />} /> */}
          {/* <Route
            exact
            path="/reserve/:getin/:getout/:person/:price_per_day/:name/:city/:id"
            element={<reservation />}
          /> */}
          {/* <Route exact path="/adminpanel/:id/messages" element={<Messages />} /> */}
        </Routes>
      </BrowserRouter>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
