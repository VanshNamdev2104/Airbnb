import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  destination: "",
  checkIn: "",
  checkOut: "",
  guests: 1,
}

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setDestination: (state, action) => {
      state.destination = action.payload
    },
    setCheckIn: (state, action) => {
      state.checkIn = action.payload
    },
    setCheckOut: (state, action) => {
      state.checkOut = action.payload
    },
    setGuests: (state, action) => {
      state.guests = action.payload
    },
    resetSearch: (state) => {
      return initialState
    },
  },
})

export const { setDestination, setCheckIn, setCheckOut, setGuests, resetSearch } = searchSlice.actions
export default searchSlice.reducer
