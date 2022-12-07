import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  // { id: "1", name: "Dresser", roomId: "1", completed: false },
  // { id: "2", name: "Bed", roomId: "0", completed: true },
];

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    itemAdded: {
      reducer(state, action) {
        //mutates an array
        state.push(action.payload);
      },
      prepare(name, roomId, completed) {
        return {
          payload: {
            id: nanoid(),
            name,
            roomId,
            completed: false,
          },
        };
      },
    },
    deleteItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
  },
  // extraReducers:{
  //   []
  // }
});
//selects all items
export const selectAllItems = (state) => state.items;
export const selectItemById = (state, itemId) =>
  state.items.find((item) => item.id === itemId);
export const { itemAdded, deleteItem } = itemsSlice.actions;
export default itemsSlice.reducer;
