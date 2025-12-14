import { configureStore } from "@reduxjs/toolkit";
import inventorySlice from "./inventorySlice";
import userSlice from "./userSlice";

export const store = configureStore({
    reducer: {
        inventory: inventorySlice,
        user: userSlice
    }
})