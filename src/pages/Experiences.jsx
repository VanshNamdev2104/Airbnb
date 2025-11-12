import { motion } from "framer-motion"
import ExperienceCard from "../components/ExperienceCard"
import { experiencesData } from "../data/mockData"
import { useState } from "react"

export default function Experiences() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredExperiences = experiencesData.filter(
    (exp) =>
      exp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      exp.description.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <main className="min-h-screen pt-24 pb-16 px-4 max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">Experiences</h1>
        <p className="text-gray-600 text-lg">Discover unique activities and adventures</p>
      </motion.div>

      <div className="mb-12">
        <input
          type="text"
          placeholder="Search experiences..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredExperiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} index={index} />
        ))}
      </div>

      {filteredExperiences.length === 0 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
          <p className="text-gray-600 text-lg">No experiences found. Try a different search.</p>
        </motion.div>
      )}
    </main>
  )
}
