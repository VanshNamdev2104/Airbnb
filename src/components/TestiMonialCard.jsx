import { motion } from "framer-motion"

export default function TestimonialCard({ testimonial, index }) {
  if (!testimonial) return null 

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1 }}
      className="bg-linear-to-br from-blue-50 to-teal-50 rounded-2xl p-8 border border-teal-200"
    >
      <div className="flex gap-1 mb-4">
        {[...Array(testimonial?.rating || 0)].map((_, i) => (
          <span key={i} className="text-yellow-400 text-xl">
            ★
          </span>
        ))}
      </div>

      <p className="text-gray-700 italic mb-6 leading-relaxed">
        "{testimonial?.text || 'No review provided'}"
      </p>

      <div className="flex items-center gap-4">
        <img
          src={testimonial?.avatar || "/placeholder.svg"}
          alt={testimonial?.name || 'Anonymous'}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <p className="font-bold text-gray-900">{testimonial?.name || 'Unknown User'}</p>
          <p className="text-gray-600 text-sm">{testimonial?.role || 'Guest'}</p>
        </div>
      </div>
    </motion.div>
  )
}
