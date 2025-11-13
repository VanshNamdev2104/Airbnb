import { motion } from "framer-motion";
import { memo } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { setSelectedExperience } from "../features/experienceSlice";

const ExperienceCard = memo(({ experience, index }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(setSelectedExperience(experience));
    navigate("/experience-detail");
  };

  return (
    <motion.div
      onClick={handleClick}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
        delay: index * 0.08,
      }}
      whileHover={{ y: -5, scale: 1.03 }}
      className="shrink-0 w-80 cursor-pointer group select-none"
    >
      {/* Image Section */}
      <div className="relative h-48 rounded-2xl overflow-hidden mb-4 bg-gray-200">
        <img
          loading="lazy"
          src={experience.image || "/placeholder.svg"}
          alt={experience.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        />

 
        <div className="absolute inset-0 bg-linear-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

 
        {experience.type && (
          <div className="absolute top-3 left-3 bg-teal-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
            {experience.type}
          </div>
        )}
      </div>

      
      <div className="space-y-1">
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-teal-600 transition-colors duration-300">
          {experience.title}
        </h3>
        <p className="text-gray-600 text-sm line-clamp-2">
          {experience.description}
        </p>

        <div className="flex items-center justify-between mt-3">
          <span className="text-teal-600 font-semibold">
            From ${experience.price}
          </span>
          <span className="text-sm text-gray-500">{experience.duration}</span>
        </div>
      </div>
    </motion.div>
  );
});

export default ExperienceCard;
