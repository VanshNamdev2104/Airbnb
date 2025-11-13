import { createSlice } from "@reduxjs/toolkit";
import { staysData } from "../data/mockData";

const initialState = {
  stays: staysData,
  selectedStay: null,
};

const staysSlice = createSlice({
  name: "stays",
  initialState,
  reducers: {
    setSelectedStay: (state, action) => {
      state.selectedStay = action.payload;
    },
    clearSelectedStay: (state) => {
      state.selectedStay = null;
    },
  },
});

export const { setSelectedStay, clearSelectedStay } = staysSlice.actions;
export default staysSlice.reducer;
