import { configureStore, combineReducers } from "@reduxjs/toolkit";
import numberReducer from "./reducers/numberReducer";

const rootReducer = combineReducers({
  numberReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppState = ReturnType<typeof store.getState>;
