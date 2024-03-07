import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./Reducers";
import loggerMiddleware from "./Middleware/logger"; // Import your logger middleware

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerMiddleware),
});

export default store;
