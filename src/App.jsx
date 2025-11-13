import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Routes, Route, useLocation } from "react-router"; // react-router-dom use karo
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import Experiences from "./pages/Experiences";
import Reviews from "./pages/Reviews";
import StayDetails from "./pages/StayDetails";
import ExperienceDetails from "./pages/ExperienceDetails";
import LoadingScreen from "./components/LoadingScreen";
import ScrollToTop from "./components/ScrollTop";
import Cursor from "./components/Cursor";

const pageVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
};

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
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
        {/* Add other routes similarly */}
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
    <>
      {!loadingDone && <LoadingScreen />}
      {loadingDone && (
        <div className="min-h-screen bg-white transition-all duration-700" data-scroll-container>
          <Navbar />
          <ScrollToTop />
          <AnimatedRoutes />
        </div>
      )}
    </>
  );
}

export default App;
