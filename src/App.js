import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import "bootstrap/dist/js/bootstrap.js";
import "./Resource/css/styles.css";
// import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Alert from "./Components/Main/Alert/Alert";
import Nav from "./Components/Nav/Nav";
import First from "./Components/Main/First/First";
import Second from "./Components/Main/Second/Second";
import Third from "./Components/Main/Third/Third";
import Fourth from "./Components/Main/Fourth/Fourth";
import Fifth from "./Components/Main/Fifth/Fifth";
import Sixth from "./Components/Main/Sixth/Sixth";
import Footer from "./Components/Footer/Footer";
import Move from "./Components/Main/Move/Move";
import PropagateLoader from "react-spinners/PropagateLoader";
import { useEffect, useState } from "react";
// +  Deploy complete!
// Project Console: https://console.firebase.google.com/project/apple-react-function-based/overview
// Hosting URL: https://apple-react-function-based.web.app
function App() {
  const [loading, setLoading] = useState(false);
  let [color, setColor] = useState("white");

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3995);
  }, []);
  return (
    <div className="Myapple">
      {loading ? (
        <PropagateLoader
          className="text-center apple d-flex justify-content-center align-item-center w-100 vh-100"
          color={color}
          loading={loading}
          size={30}
        />
      ) : (
        <div className="App">
          <Nav />
          <Alert />
          <First />
          <Second />
          <Third />
          <Fourth />
          <Fifth />
          <Sixth />
          <Move />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
