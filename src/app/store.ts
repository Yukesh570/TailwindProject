import { configureStore } from "@reduxjs/toolkit";
import testReducer from "../feature/testSlice"
export const store = configureStore({
    reducer: testReducer
});