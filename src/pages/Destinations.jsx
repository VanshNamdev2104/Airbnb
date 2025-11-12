import { motion } from "framer-motion"
import StayCard from "../components/StayCard"
import { staysData } from "../data/mockData"
import { useState } from "react"

export default function Destinations() {
  const [sortBy, setSortBy] = useState("popular")
  const [filterType, setFilterType] = useState("all")

  const filteredStays =
    filterType === "all" ? staysData : staysData.filter((stay) => stay.type.toLowerCase() === filterType.toLowerCase())

  return (
    <main className="min-h-screen pt-24 pb-16 px-4 max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">All Destinations</h1>
        <p className="text-gray-600 text-lg">Find your perfect place to stay</p>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-8 mb-12">
        <div className="md:w-1/4">
          <div className="bg-white rounded-2xl p-6 border border-gray-200">
            <h3 className="font-bold text-lg mb-4">Filter</h3>

            <div className="mb-6">
              <p className="font-semibold text-gray-900 mb-3">Type</p>
              {["all", "apartment", "house", "villa"].map((type) => (
                <label key={type} className="flex items-center gap-2 mb-2 cursor-pointer">
                  <input
                    type="radio"
                    name="type"
                    value={type}
                    checked={filterType === type}
                    onChange={(e) => setFilterType(e.target.value)}
                    className="w-4 h-4"
                  />
                  <span className="capitalize text-gray-700">{type}</span>
                </label>
              ))}
            </div>

            <div className="mb-6">
              <p className="font-semibold text-gray-900 mb-3">Sort By</p>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                <option value="popular">Most Popular</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
        </div>

        <div className="md:w-3/4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStays.map((stay, index) => (
              <StayCard key={index} stay={stay} index={index} />
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
