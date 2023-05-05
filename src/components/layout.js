import Footer from "./Homepage/layouts/Footer";
import Navbar from "./Homepage/layouts/Navbar";

export default function Layout({ children }) {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        // height: "100%",
        minHeight: "100vh",
        flexDirection: "column",
      }}
    >
      <Navbar />
      <div
        style={{
          flexGrow: "1",
        }}
      >
        {children}
      </div>
      <Footer />
    </div>
  );
}
