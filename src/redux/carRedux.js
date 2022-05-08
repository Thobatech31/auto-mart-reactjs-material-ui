import { createSlice } from "@reduxjs/toolkit";

export const carSlice = createSlice({
  name: "car",
  initialState: {
    cars: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //GET ALL
    getCarStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getCarSuccess: (state, action) => {
      state.isFetching = false;
      state.cars = action.payload;
    },
    getCarFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //DELETE
    deleteCarStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteCarSuccess: (state, action) => {
      state.isFetching = false;
      state.cars.splice(
        state.cars.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteCarFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //UPDATE
    updateCarStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateCarSuccess: (state, action) => {
      state.isFetching = false;
      state.cars[
        state.cars.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.car;
    },
    updateCarFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //UPDATE
    addCarStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addCarSuccess: (state, action) => {
      state.isFetching = false;
      state.cars.push(action.payload);
    },
    addCarFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getCarStart,
  getCarSuccess,
  getCarFailure,
  deleteCarStart,
  deleteCarSuccess,
  deleteCarFailure,
  updateCarStart,
  updateCarSuccess,
  updateCarFailure,
  addCarStart,
  addCarSuccess,
  addCarFailure,
} = carSlice.actions;

export default carSlice.reducer;
