import { motion } from "framer-motion";
import TestimonialCard from "../components/TestimonialCard";
import { testimonialsData } from "../data/mockData";

export default function Reviews() {
  return (
    <main className="pt-24 pb-16 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Traveler Reviews
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Read what people say about their unforgettable experiences
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonialsData && testimonialsData.length > 0 ? (
          testimonialsData.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              testimonial={testimonial}
              index={index}
            />
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No reviews available yet 😔
          </p>
        )}
      </div>
    </main>
  );
}
