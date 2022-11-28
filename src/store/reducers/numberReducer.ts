import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { INumbers } from "../../types/numbers";
import { fetchData } from "./ActionCreator";

const initialState: INumbers = {
  result: "",
  number: 5,
  isLoading: false,
  errorMessage: "",
  type: "trivia",
};

export const numberReducer = createSlice({
  name: "numbers",
  initialState,
  reducers: {
    setType(state, action: PayloadAction<INumbers["type"]>) {
      state.type = action.payload;
    },
    setNumber(state, action: PayloadAction<INumbers["number"]>) {
      state.number = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(
        fetchData.fulfilled,
        (state, action: PayloadAction<INumbers["result"]>) => {
          state.result = action.payload;
          state.isLoading = false;
        }
      )
      .addCase(
        fetchData.rejected,
        (state, action: PayloadAction<INumbers["errorMessage"]>) => {
          state.errorMessage = action.payload;
          state.isLoading = false;
        }
      );
  },
});

export default numberReducer.reducer;
