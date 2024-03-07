import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // Define initial state
  profile: null,
};

const profileSlice = createSlice({
  name: "profile", // Name your slice appropriately
  initialState,
  reducers: {
    setProfile: (state, action) => {
      state.profile = action.payload;
    },
  },
});

export const { setProfile } = profileSlice.actions;

export default profileSlice.reducer;
