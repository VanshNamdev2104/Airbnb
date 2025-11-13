import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import SearchBar from "../components/SearchBar";
import StayCard from "../components/StayCard";
import ExperienceCard from "../components/ExperienceCard";
import TestimonialCard from "../components/TestimonialCard";
import {
  staysData,
  experiencesData,
  testimonialsData,
  categoriesData,
} from "../data/mockData";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-title", { y: 60, opacity: 0, duration: 1 })
        .from(".hero-desc", { y: 30, opacity: 0, duration: 0.8 }, "-=0.4")
        .from(".search-bar", { y: 40, opacity: 0, duration: 0.8 }, "-=0.3");

      // Floating background animation
      gsap.to(".floating-bg", {
        y: 40,
        duration: 6,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      // Section reveal
      gsap.utils.toArray(".reveal-section").forEach((section) => {
        gsap.from(section, {
          opacity: 0,
          y: 80,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            scrub: 1.5,
          },
        });
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  const filteredStays =
    selectedCategory === "All"
      ? staysData
      : staysData.filter(
          (stay) =>
            stay.type.toLowerCase() === selectedCategory.toLowerCase()
        );

  return (
    <main ref={heroRef} className="w-full relative overflow-hidden">
     
      <section className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden pt-16">
      
        <div className="absolute inset-0 floating-bg bg-linear-to-r from-blue-100 via-teal-100 to-blue-50 opacity-70 blur-3xl"></div>

   
        <motion.div
          className="absolute top-1/3 left-10 text-5xl"
          animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        >
          🏔️
        </motion.div>

        <motion.div
          className="absolute bottom-1/3 right-10 text-5xl"
          animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        >
          ✈️
        </motion.div>

       
        <div className="relative z-10 px-4 max-w-4xl mx-auto">
          <h1 className="hero-title text-5xl md:text-7xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-teal-600 via-blue-600 to-teal-500 animate-gradient">
            Discover Your Next Adventure
          </h1>
          <p className="hero-desc text-xl text-gray-700 mb-8">
            Explore extraordinary places and unforgettable experiences around
            the world
          </p>

          
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 bottom-0 w-48 h-1 rounded-full bg-linear-gradient-to-r from-teal-400 to-blue-500"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          ></motion.div>
        </div>

       
        <div className="absolute top-22 w-full px-4 search-bar z-20">
          <SearchBar />
        </div>

       
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-teal-600 flex flex-col items-center gap-1 cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-sm tracking-widest">Explore More</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </section>

      
      <section className="reveal-section px-4 max-w-7xl mx-auto mt-24">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">
            Search by Category
          </h2>
          <p className="text-gray-600">
            Explore stays based on what matters to you
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[{ name: "All", icon: "🌍" }, ...categoriesData].map(
            (category, index) => (
              <motion.div
                key={index}
                onClick={() => setSelectedCategory(category.name)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                className={`text-center cursor-pointer group p-4 rounded-xl border ${
                  selectedCategory === category.name
                    ? "bg-teal-50 border-teal-500 shadow-md"
                    : "border-transparent hover:border-gray-200"
                }`}
              >
                <div className="text-5xl mb-3 group-hover:scale-125 transition transform">
                  {category.icon}
                </div>
                <p
                  className={`font-semibold transition ${
                    selectedCategory === category.name
                      ? "text-teal-600"
                      : "text-gray-900 group-hover:text-teal-600"
                  }`}
                >
                  {category.name}
                </p>
              </motion.div>
            )
          )}
        </div>
      </section>

      
      <section className="reveal-section py-16 px-4 max-w-7xl mx-auto">
        <div className="mb-12 flex justify-between items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-2">
              {selectedCategory === "All"
                ? "Exceptional Stays"
                : `${selectedCategory} Stays`}
            </h2>
            <p className="text-gray-600">
              {selectedCategory === "All"
                ? "Handpicked places recommended by our community"
                : `Explore top-rated ${selectedCategory.toLowerCase()} stays`}
            </p>
          </div>
        </div>

        {filteredStays.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredStays.map((stay, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: index * 0.08, duration: 0.6 }}
              >
                <StayCard stay={stay} index={index} />
              </motion.div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 text-lg py-8">
            No stays found for this category 😔
          </p>
        )}
      </section>

      
      <section className="reveal-section py-16 px-4 max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">
            Unforgettable Experiences
          </h2>
          <p className="text-gray-600">
            Book activities and guided tours from local experts
          </p>
        </div>

        <div className="overflow-x-auto pb-4">
          <div className="flex gap-6">
            {experiencesData.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: index * 0.05, duration: 0.6 }}
              >
                <ExperienceCard experience={experience} index={index} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
