import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedExperience: null,
};

const experienceSlice = createSlice({
  name: "experience",
  initialState,
  reducers: {
    setSelectedExperience: (state, action) => {
      state.selectedExperience = action.payload;
    },
    clearSelectedExperience: (state) => {
      state.selectedExperience = null;
    },
  },
});

export const { setSelectedExperience, clearSelectedExperience } = experienceSlice.actions;
export default experienceSlice.reducer;
