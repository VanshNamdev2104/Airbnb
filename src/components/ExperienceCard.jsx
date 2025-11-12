import { motion } from "framer-motion"

export default function ExperienceCard({ experience, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ scale: 1.05 }}
      className="shrink-0 w-80 cursor-pointer group"
    >
      <div className="relative h-48 rounded-2xl overflow-hidden mb-4 bg-gray-200">
        <img
          src={experience.image || "/placeholder.svg"}
          alt={experience.title}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
      </div>

      <h3 className="text-lg font-bold text-gray-900 group-hover:text-teal-600 transition">{experience.title}</h3>
      <p className="text-gray-600 text-sm mt-2">{experience.description}</p>
      <div className="flex items-center justify-between mt-4">
        <span className="text-teal-600 font-semibold">From ${experience.price}</span>
        <span className="text-sm text-gray-600">{experience.duration}</span>
      </div>
    </motion.div>
  )
}
