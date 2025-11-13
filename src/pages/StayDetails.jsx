import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";

export default function StayDetail() {
  const stay = useSelector((state) => state.stays.selectedStay);
  const navigate = useNavigate();

  if (!stay) return <p className="text-center mt-20">Please select a stay first!</p>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="max-w-4xl mx-auto p-8"
    >
      <motion.button
        onClick={() => navigate(-1)}
        whileHover={{ scale: 1.1, backgroundColor: "#14b8a6", color: "white" }}
        whileTap={{ scale: 0.95 }}
        className="mb-6 px-4 py-2 border border-teal-600 text-teal-600 rounded-md font-semibold focus:outline-none"
      >
        ← Back
      </motion.button>

      <motion.img
        src={stay.image}
        alt={stay.title}
        className="w-full h-80 object-cover rounded-xl mb-6"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      />

      <motion.h1
        className="text-3xl font-bold mb-2"
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {stay.title}
      </motion.h1>

      <motion.p
        className="text-gray-600 mb-4"
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {stay.location}
      </motion.p>

      <motion.div
        className="flex items-center gap-2 mb-4"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <span className="text-yellow-400 text-xl">★</span>
        <span className="font-semibold">{stay.rating}</span>
        <span className="text-gray-500">({stay.reviews})</span>
      </motion.div>

      <motion.p
        className="text-gray-800 mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {stay.description || "No description"}
      </motion.p>

      <motion.span
        className="font-bold text-xl"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        ${stay.price}
      </motion.span>{" "}
      / night
    </motion.div>
  );
}
