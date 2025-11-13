import { Routes, Route, useLocation } from "react-router-dom";
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
import Cursor from "./components/Cursor";
import Footer from "./components/Footer";
import "./App.css";

const pageVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
};

const motionProps = {
  variants: pageVariants,
  initial: "initial",
  animate: "animate",
  exit: "exit",
  transition: { duration: 0.4, ease: "easeInOut" },
};

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={<motion.div {...motionProps}><Home /></motion.div>}
        />
        <Route
          path="/destinations"
          element={<motion.div {...motionProps}><Destinations /></motion.div>}
        />
        <Route
          path="/experiences"
          element={<motion.div {...motionProps}><Experiences /></motion.div>}
        />
        <Route
          path="/reviews"
          element={<motion.div {...motionProps}><Reviews /></motion.div>}
        />
        <Route
          path="/stay"
          element={<motion.div {...motionProps}><StayDetails /></motion.div>}
        />
        <Route
          path="/experience-detail"
          element={<motion.div {...motionProps}><ExperienceDetails /></motion.div>}
        />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  const [loadingDone, setLoadingDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoadingDone(true), 2000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Cursor />
      {!loadingDone && <LoadingScreen />}
      {loadingDone && (
        <div className="min-h-screen bg-white transition-all duration-700 flex flex-col">
          <Navbar />
          <ScrollToTop />
          <div className="flex-grow">
            <AnimatedRoutes />
          </div>
          <Footer />
        </div>
      )}
    </>
  );
}
