import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { setDestination, setCheckIn, setCheckOut, setGuests } from "../features/searchSlice"
import { motion } from "framer-motion"

export default function SearchBar() {
  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm()
  const search = useSelector((state) => state.search)

  const onSubmit = (data) => {
    dispatch(setDestination(data.destination))
    dispatch(setCheckIn(data.checkIn))
    dispatch(setCheckOut(data.checkOut))
    dispatch(setGuests(data.guests))
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="bg-white rounded-3xl shadow-2xl p-6 max-w-4xl mx-auto -mt-16 relative z-20"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Where to?</label>
          <input
            type="text"
            placeholder="Destination"
            {...register("destination")}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Check in</label>
          <input
            type="date"
            {...register("checkIn")}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Check out</label>
          <input
            type="date"
            {...register("checkOut")}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="block text-sm font-semibold text-gray-700">Guests</label>
          <div className="flex items-center gap-2">
            <select
              {...register("guests")}
              className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="px-6 py-3 bg-teal-600 text-white rounded-xl font-semibold hover:bg-teal-700 transition"
            >
              Search
            </motion.button>
          </div>
        </div>
      </form>
    </motion.div>
  )
}
