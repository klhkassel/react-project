import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "0",
    name: "Kitchen",
    image: "https://www.bellweatherdesignbuild.com/hubfs/Photos-0004_(3).jpg",
  },
  { id: "1", name: "Living Room", image: "" },
  { id: "2", name: "Dining Room", image: "" },
  { id: "3", name: "Family Room", image: "" },
  { id: "4", name: "Bedroom", image: "" },
  { id: "5", name: "Second Bedroom", image: "" },
  { id: "6", name: "Home Office", image: "" },
  { id: "7", name: "Gym", image: "" },
  { id: "8", name: "Basement", image: "" },
  {
    id: "9",
    name: "Garage",
    image: "",
  },
  {
    id: "10",
    name: "Bathroom",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCz4-7nvYLr1d5o4-mlNgjmUAQJallNb2LCRMLEvtHdx2Nh2yLuEigdSTWpFBJAANBumw&usqp=CAU",
  },
];

const roomsSlice = createSlice({
  name: "rooms",
  initialState,
  reducers: {},
});

export const selectAllRooms = (state) => state.rooms;
export const selectRoomById = (state, roomId) =>
  state.room.find((room) => room.id === roomId);
export default roomsSlice.reducer;
