import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { defaultCars } from "./utils";

const initialState = {
  cars: [],
  car: {},
  status: "",
  users: [],
};

export const getCars = createAsyncThunk("cars/getCars", async () => {
  try {
    const response = await fetch(
      "https://rent-cars-api.herokuapp.com/customer/car"
    );
    const result = await response.json();
    return result;
  } catch (error) {
    throw new Error(error);
  }
});

export const getCar = createAsyncThunk("cars/getCar", async (id) => {
  try {
    const response = await fetch(
      "https://rent-cars-api.herokuapp.com/customer/car/" + id
    );
    const result = await response.json();
    return result;
  } catch (error) {
    throw new Error(id);
  }
});

export const carSlice = createSlice({
  name: "car",
  initialState,
  extraReducers: {
    [getCars.pending]: (state) => {
      state.status = "loading";
    },
    [getCars.fulfilled]: (state, action) => {
      state.status = "idle";
      state.cars = action.payload;
    },
    [getCars.rejected]: (state, action) => {
      //   alert(action.error.message + "\nNow, you're using static data");
      state.loading = "idle";
      state.cars = defaultCars;
    },
    [getCar.pending]: (state) => {
      state.status = "loading";
    },
    [getCar.fulfilled]: (state, action) => {
      console.log("success");
      state.status = "idle";
      state.car = action.payload;
    },
    [getCar.rejected]: (state, action) => {
      const car = defaultCars.find(
        (car) => car.id.toString() === action.error.message
      );
      state.loading = "idle";
      state.car = car;
    },
  },
});

export default carSlice.reducer;
