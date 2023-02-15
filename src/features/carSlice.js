import { ListItemText } from "@mui/material";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import carService from "./carService";

const initialState = {
  car: {
    km: 0,
  },
  cars: [],
  queryCars: [],
  hotcar: {},
  isError: false,
  isLoading: false,
  isSuccess: false,
  marcaList: [],
};

export const getCars = createAsyncThunk("cars/getCars", async (_, thunkAPI) => {
  try {
    return await carService.getCars();
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    console.log(message);
    return thunkAPI.rejectWithValue(message);
  }
});

export const getHotCar = createAsyncThunk(
  "cars/getHotCar",
  async (_, thunkAPI) => {
    try {
      return await carService.getHotCar();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.log(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getCar = createAsyncThunk(
  "cars/getCar",
  async (slug, thunkAPI) => {
    try {
      return await carService.getCar(slug);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.log(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getQueryCars = createAsyncThunk(
  "cars/getQueryCars",
  async (formData, thunkAPI) => {
    try {
      return await carService.getQueryCars(formData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.log(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const carSlice = createSlice({
  name: "Car",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCars.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.cars = action.payload;
        const cars = action.payload;
        let array = [];
        cars.map((car) => {
          const { marca } = car;
          return array.push(marca);
        });
        state.marcaList = array;
      })
      .addCase(getCars.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getQueryCars.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getQueryCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.queryCars = action.payload;
      })
      .addCase(getQueryCars.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getCar.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCar.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.car = action.payload;
      })
      .addCase(getCar.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getHotCar.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getHotCar.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.hotcar = action.payload;
      })
      .addCase(getHotCar.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const selectCars = (state) => state.car.cars;
export const selectCar = (state) => state.car.car;
export const selectHotCar = (state) => state.car.hotcar;
export const selectMarcaList = (state) => state.car.marcaList;
export const selectQueryCars = (state) => state.car.queryCars;

export default carSlice.reducer;
