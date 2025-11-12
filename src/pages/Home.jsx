import { useRef } from "react";
import gsap from "gsap";
import { useEffect } from "react";
import SearchBar from "../components/SearchBar";
import StayCard from "../components/StayCard";
import ExperienceCard from "../components/ExperienceCard";
import TestimonialCard from "../components/TestimonialCard";
import { staysData, experiencesData, testimonialsData, categoriesData } from "../data/mockData";
import { motion } from "framer-motion";

export default function Home() {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate Hero Title and Desc
      gsap.fromTo(
        ".hero-title",
        { y: 50, scale: 0.8, opacity: 0 },
        { y: 0, scale: 1, opacity: 1, duration: 1, ease: "power2.out" }
      );

      gsap.fromTo(
        ".hero-desc",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, delay: 0.6 }
      );

      // Animate background bubbles floating effect
      gsap.to(".hero-bubble", {
        y: [-20, 30, -10, 10],
        scale: [1, 1.1, 0.8, 1],
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: "ease.inOut",
        stagger: 0.25,
      });
    }, heroRef);

    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  return (
    <main ref={heroRef} className="w-full">
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 z-0">
          <div className="hero-bubble absolute w-96 h-96 bg-teal-100 rounded-full -top-40 -right-40 opacity-50" />
          <div className="hero-bubble absolute w-96 h-96 bg-blue-100 rounded-full bottom-0 -left-32 opacity-50" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="hero-title text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Discover Your Next
            <span className="text-transparent bg-clip-text bg-linear-to-r from-teal-600 to-blue-600"> Adventure</span>
          </h1>

          <p className="hero-desc text-xl text-gray-600 mb-8">
            Explore extraordinary places and unforgettable experiences around the world
          </p>
        </div>

        <div className="absolute top-22 w-full px-4">
          <SearchBar />
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-teal-600"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </section>

      <section className="py-16 px-4 max-w-7xl mx-auto mt-24">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">Search by category</h2>
          <p className="text-gray-600">Explore stays based on what matters to you</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {categoriesData.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -8 }}
              className="text-center cursor-pointer group"
            >
              <div className="text-5xl mb-3 group-hover:scale-125 transition transform">{category.icon}</div>
              <p className="font-semibold text-gray-900 group-hover:text-teal-600 transition">{category.name}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">Exceptional stays</h2>
          <p className="text-gray-600">Handpicked places recommended by our community</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {staysData.map((stay, index) => (
            <StayCard key={index} stay={stay} index={index} />
          ))}
        </div>
      </section>

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">Unforgettable experiences</h2>
          <p className="text-gray-600">Book activities and guided tours from local experts</p>
        </motion.div>

        <div className="overflow-x-auto pb-4">
          <div className="flex gap-6">
            {experiencesData.map((experience, index) => (
              <ExperienceCard key={index} experience={experience} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-16 px-4 max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">Loved by travelers</h2>
          <p className="text-gray-600">See what our guests are saying</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>
      </section>

      <section className="py-20 px-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-linear-to-r from-teal-600 to-blue-600 rounded-3xl p-12 text-center text-white"
        >
          <h2 className="text-4xl font-bold mb-4">Ready to explore?</h2>
          <p className="text-lg opacity-90 mb-8">
            Join thousands of travelers discovering unique places and experiences
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white text-teal-600 rounded-full font-bold text-lg hover:shadow-lg transition"
          >
            Start Exploring Now
          </motion.button>
        </motion.div>
      </section>
    </main>
  );
}
