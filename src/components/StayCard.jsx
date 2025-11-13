import { motion } from "framer-motion";
import { useState, memo, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { setSelectedStay } from "../features/staysSlice";

const StayCard = memo(({ stay, index }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [scrollSpeed, setScrollSpeed] = useState(1); 
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { selectedStay } = useSelector((state) => state.stays);

  
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let lastTime = performance.now();

    const handleScroll = () => {
      const now = performance.now();
      const deltaY = Math.abs(window.scrollY - lastScrollY);
      const deltaTime = now - lastTime;
      const speed = deltaY / deltaTime;


      const normalized = Math.min(Math.max(speed * 10, 0.6), 1.8);
      setScrollSpeed(normalized);

      lastScrollY = window.scrollY;
      lastTime = now;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

 
  const handleClick = () => {
    dispatch(setSelectedStay(stay));
    navigate("/stay");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6 / scrollSpeed, 
        ease: "easeOut",
        delay: index * 0.08,
      }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="group cursor-pointer select-none"
      onClick={handleClick}
    >
      <div className="relative h-64 rounded-2xl overflow-hidden mb-4 bg-gray-100">
        <img
          loading="lazy"
          src={stay.image || "/placeholder.svg"}
          alt={stay.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />

       
        <motion.button
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          onClick={(e) => {
            e.stopPropagation();
            setIsFavorite((prev) => !prev);
          }}
          className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-md hover:shadow-lg transition"
        >
          <span
            className={`text-lg ${isFavorite ? "text-red-500" : "text-gray-400"}`}
          >
            {isFavorite ? "❤️" : "🤍"}
          </span>
        </motion.button>

     
        <div className="absolute top-3 left-3 bg-teal-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
          {stay.type}
        </div>
      </div>

     
      <div className="space-y-1">
        <h3 className="text-base font-semibold text-gray-900 group-hover:text-teal-600 transition">
          {stay.title}
        </h3>
        <p className="text-gray-600 text-sm">{stay.location}</p>

        <div className="flex items-center gap-1 text-sm">
          <span className="text-yellow-400">★</span>
          <span className="font-semibold text-gray-900">{stay.rating}</span>
          <span className="text-gray-500">({stay.reviews})</span>
        </div>

        <div className="pt-1">
          <span className="font-bold text-gray-900">${stay.price}</span>
          <span className="text-gray-600 text-sm"> / night</span>
        </div>
      </div>
    </motion.div>
  );
});

export default StayCard;
