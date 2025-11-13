import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";

export default function ExperienceDetail() {
  const experience = useSelector((state) => state.experience.selectedExperience);
  const navigate = useNavigate();

  if (!experience) {
    return <p className="text-center mt-20 text-gray-600">Please select an experience first!</p>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -30, scale: 0.98 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="max-w-4xl mx-auto p-8"
    >
      {/* Back Button with animation */}
      <motion.button
        onClick={() => navigate(-1)}
        whileHover={{ scale: 1.1, backgroundColor: "#14b8a6", color: "white" }}
        whileTap={{ scale: 0.97 }}
        className="mb-8 px-4 py-2 border border-teal-600 text-teal-600 rounded-md font-semibold focus:outline-none"
      >
        ← Back
      </motion.button>

      <motion.img
        src={experience.image}
        alt={experience.title}
        className="w-full h-80 object-cover rounded-xl mb-6"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      />

      <motion.h1
        className="text-3xl font-bold mb-3"
        initial={{ x: -25, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.15 }}
      >
        {experience.title}
      </motion.h1>

      <motion.p
        className="text-gray-600 mb-4"
        initial={{ x: 25, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.23 }}
      >
        {experience.description}
      </motion.p>

      <motion.div
        className="flex items-center justify-between mb-4"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.32 }}
      >
        <span className="text-teal-600 font-bold text-lg">
          From ${experience.price}
        </span>
        <span className="text-gray-500">{experience.duration}</span>
      </motion.div>

      <motion.p
        className="text-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.42 }}
      >
        {experience.details ||
          "No additional details available for this experience. Please check back later!"}
      </motion.p>
    </motion.div>
  );
}
