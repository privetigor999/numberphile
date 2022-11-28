import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { INumbers } from "../../types/numbers";

export const fetchData = createAsyncThunk<
  INumbers["result"],
  // { number: INumbers["number"] },
  void,
  { rejectValue: INumbers["errorMessage"]; state: { numberReducer: INumbers } }
>("numbers/fetchData", async (_, { rejectWithValue, getState }) => {
  const { type, number } = getState().numberReducer;

  try {
    const response = await axios.get(`http://numbersapi.com/${number}/${type}`);
    return response.data;
  } catch (e) {
    return rejectWithValue((e as AxiosError).message);
  }
});
