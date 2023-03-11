// import "../components/AdminPanel/style/adminpanel.scss";
// import "../components/AdminPanel/style/widget.scss";
// import "../components/AdminPanel/style/chart.scss";
// import "../components/AdminPanel/style/roomStatus.scss";
// import "../components/AdminPanel/style/chatBox.scss";
// import "../css/Navbar.css";
// import "../css/Homepage.css";
// import "../css/Verify.css";
// import "../css/Average_rating.css";
// import "../css/Profile.css";
// import "../css/IncreaseCredit.css";
// import "../css/Favorites.css";
// import "../css/Reserve.css";
// import "../css/Hotelpage.css";
// import "../css/Hotelpage2.css";
// import "../css/Edithotel.css";
// import "../css/Edithotel.css";
// import "../css/Chat.css";
// import "../css/NewAndTopHotels.css";

import { useEffect, useState } from "react";

export default function MyApp({ Component, pageProps }) {
  const [render, setRender] = useState(false);
  useEffect(() => setRender(true), []);
  return render ? <Component {...pageProps} /> : null;
}
