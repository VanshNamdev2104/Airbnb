import { useState } from "react";
import { Link, useLocation } from "react-router"; 
import { motion, AnimatePresence } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/authSlice";
import AuthModal from "../components/AuthModal";

const NAV_LINKS = [
  { to: "/destinations", label: "🏖️ Destinations", isAnchor: false },
  { to: "/experiences", label: "🌍 Experiences", isAnchor: false },
  { to: "/reviews", label: "⭐ Reviews", isAnchor: false },
];

export default function Navbar() {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const location = useLocation();

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm backdrop-blur-md bg-opacity-90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" aria-label="Home">
              <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2">
                <img
                  src="https://imgs.search.brave.com/NeoWnk0OGZZD6oUS1jXMcubVESrH41iZuEt8f9CsEd8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9sb2dv/dHlwLnVzL2ZpbGUv/YWlyYm5iLnN2Zw"
                  alt="Logo"
                  className="w-24 md:w-32 object-contain"
                />
              </motion.div>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex gap-10 items-center">
              {NAV_LINKS.map((link) => {
                const isActive = location.pathname === link.to;
                return link.isAnchor ? (
                  <motion.a
                    key={link.label}
                    href={link.to}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 250 }}
                    className={`text-gray-700 font-medium transition flex items-center gap-2 ${
                      isActive ? "text-teal-600 font-bold" : "hover:text-teal-600"
                    }`}
                  >
                    {link.label}
                  </motion.a>
                ) : (
                  <motion.div key={link.label} whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 250 }}>
                    <Link
                      to={link.to}
                      className={`text-gray-700 font-medium transition flex items-center gap-2 ${
                        isActive ? "text-teal-600 font-bold" : "hover:text-teal-600"
                      }`}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </div>


            <div className="hidden md:flex gap-4 items-center">
              {isAuthenticated ? (
                <div className="flex items-center gap-4">
                  <span className="text-gray-700 font-semibold">{user?.name}</span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => dispatch(logout())}
                    className="px-5 py-2 bg-red-500 text-white rounded-full font-medium hover:bg-red-600 transition"
                    aria-label="Logout"
                  >
                    Logout
                  </motion.button>
                </div>
              ) : (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowAuthModal(true)}
                  className="px-5 py-2 bg-teal-600 text-white rounded-full font-medium hover:bg-teal-700 transition"
                  aria-label="Sign In"
                >
                  Sign In
                </motion.button>
              )}
            </div>

    
            <button
              className="md:hidden focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="md:hidden pb-4 border-t border-gray-200"
              >
                {NAV_LINKS.map((link) =>
                  link.isAnchor ? (
                    <motion.a
                      key={link.label}
                      href={link.to}
                      whileHover={{ scale: 1.05 }}
                      className=" py-2 text-gray-700 hover:text-teal-600 flex items-center gap-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </motion.a>
                  ) : (
                    <motion.div key={link.label} whileHover={{ scale: 1.05 }}>
                      <Link
                        to={link.to}
                        className=" py-2 text-gray-700 hover:text-teal-600 flex items-center gap-2"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  )
                )}
                {!isAuthenticated && (
                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    onClick={() => {
                      setShowAuthModal(true);
                      setMobileMenuOpen(false);
                    }}
                    className="w-full mt-4 px-6 py-2 bg-teal-600 text-white rounded-full font-medium"
                    aria-label="Sign In"
                  >
                    Sign In
                  </motion.button>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {showAuthModal && <AuthModal onClose={() => setShowAuthModal(false)} />}
    </>
  );
}
