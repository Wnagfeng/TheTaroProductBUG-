import { configureStore } from "@reduxjs/toolkit";
import hoemstore from "./modules/home";
export const store = configureStore({
  reducer: {
    home: hoemstore,
  },
  devTools: true,
});
