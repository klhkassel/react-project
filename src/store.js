import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "./components/items/itemsSlice.js";
import roomsReducer from "./components/rooms/roomsSlice";

export const store = configureStore({
  reducer: {
    items: itemsReducer,
    rooms: roomsReducer,
  },
});
