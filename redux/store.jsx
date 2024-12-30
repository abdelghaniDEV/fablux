import { configureStore } from "@reduxjs/toolkit";
import projectSlice from "./slices/projectSlice"


export const store = configureStore({
    reducer: {
        // Define your reducers here
        projects : projectSlice
    },
})