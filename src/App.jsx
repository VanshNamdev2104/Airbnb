import { HashRouter as Router, Routes, Route, useLocation } from "react-router";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import Experiences from "./pages/Experiences";
import Reviews from "./pages/Reviews";
import StayDetails from "./pages/StayDetails";
import ExperienceDetails from "./pages/ExperienceDetails";
import LoadingScreen from "./components/LoadingScreen";
import ScrollToTop from "./components/ScrollTop";
import "./App.css";
import Cursor from "./components/Cursor";


const pageVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
};

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
    <Cursor />
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <Home />
            </motion.div>
          }
        />
        <Route
          path="/destinations"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.6 }}
            >
              <Destinations />
            </motion.div>
          }
        />
        <Route
          path="/experiences"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.6 }}
            >
              <Experiences />
            </motion.div>
          }
        />
        <Route
          path="/reviews"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.6 }}
            >
              <Reviews />
            </motion.div>
          }
        />
        <Route
          path="/stay"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.6 }}
            >
              <StayDetails />
            </motion.div>
          }
        />
        <Route
          path="/experience-detail"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.6 }}
            >
              <ExperienceDetails />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [loadingDone, setLoadingDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoadingDone(true), 2500);
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
          <AnimatedRoutes />
        </div>
      )}
    </Router>
  );
}

export default App;
