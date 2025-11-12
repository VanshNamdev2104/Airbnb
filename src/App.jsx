import { BrowserRouter as Router, Routes, Route } from "react-router";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import Experiences from "./pages/Experiences";
import LoadingScreen from "./components/LoadingScreen";
import ScrollToTop from "./components/ScrollTop";
import "./App.css";
import Reviews from "./pages/Reviews";

function App() {
  const [loadingDone, setLoadingDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingDone(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {!loadingDone && <LoadingScreen />}
      {loadingDone && (
      
          <div
            className="min-h-screen bg-white transition-all duration-700"
            data-scroll-container
          >
            <Navbar />
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/destinations" element={<Destinations />} />
              <Route path="/experiences" element={<Experiences />} />
              <Route path="/reviews" element={<Reviews />} />
        

            </Routes>
          </div>
       
      )}
    </Router>
  );
}

export default App;
