import { configureStore } from "@reduxjs/toolkit";
import carReducer from "./slice/carSlice";
import authReducer from "./slice/authSlice";

export const store = configureStore({
  reducer: {
    car: carReducer,
    auth: authReducer,
  },
});
