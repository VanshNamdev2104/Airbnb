import { motion } from "framer-motion"
import { Link } from "react-router"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-24">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
  
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
            <h3 className="text-2xl font-bold text-teal-400 mb-4">✈️ TravelHub</h3>
            <p className="text-gray-400">Discover extraordinary places and create unforgettable memories.</p>
          </motion.div>


          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <h4 className="font-bold mb-4">Explore</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/destinations" className="hover:text-teal-400 transition">
                  Destinations
                </Link>
              </li>
              <li>
                <Link to="/experiences" className="hover:text-teal-400 transition">
                  Experiences
                </Link>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-teal-400 transition">
                  Reviews
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-teal-400 transition">
                  Help Center
                </a>
              </li>
            </ul>
          </motion.div>

          
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="/" className="hover:text-teal-400 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-teal-400 transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-teal-400 transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-teal-400 transition">
                  Press
                </a>
              </li>
            </ul>
          </motion.div>

          
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <h4 className="font-bold mb-4">Connect</h4>
            <div className="flex gap-4 mb-4">
              {["facebook", "twitter", "instagram"].map((social) => (
                <motion.a
                  key={social}
                  href="/"
                  whileHover={{ scale: 1.2 }}
                  className="text-gray-400 hover:text-teal-400 transition text-xl"
                >
                  {social === "facebook" && "📘"}
                  {social === "twitter" && "𝕏"}
                  {social === "instagram" && "📷"}
                </motion.a>
              ))}
            </div>
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400"
        >
          <p>&copy; 2025 TravelHub. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="/" className="hover:text-teal-400 transition">
              Privacy Policy
            </a>
            <a href="/" className="hover:text-teal-400 transition">
              Terms of Service
            </a>
            <a href="/" className="hover:text-teal-400 transition">
              Cookies
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
