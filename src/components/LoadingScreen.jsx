import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 flex flex-col items-center justify-center 
                 bg-linear-to-br from-blue-100 via-indigo-100 to-purple-100 
                 text-gray-800 z-50"
    >
     
      <motion.img
        src="https://images.unsplash.com/photo-1726241422228-605b88c2661a?auto=format&fit=crop&w=600&q=60"
        alt="Loading Logo"
        className="w-24 h-24 rounded-full mb-6 shadow-md"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 120, damping: 10 }}
      />
      <motion.h1
        className="text-2xl font-semibold tracking-wide text-gray-700"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Loading your travel experience ✈️
      </motion.h1>

      <motion.div
        className="mt-6 w-16 h-1 bg-indigo-400 rounded-full"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </motion.div>
  );
}
