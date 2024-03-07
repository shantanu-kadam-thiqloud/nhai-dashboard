import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // Define initial state
  data: [],
};

const userSlice = createSlice({
  name: "NHAIUser", // Change slice name to match reducer key in rootReducer
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.data.push(action.payload);
    },
  },
});

export const { addUser } = userSlice.actions;

export default userSlice.reducer;
