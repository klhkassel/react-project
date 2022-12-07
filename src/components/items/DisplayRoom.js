import { useSelector } from "react-redux";
import { selectAllRooms } from "../rooms/roomsSlice";

const DisplayRoom = ({ roomId }) => {
  const rooms = useSelector(selectAllRooms);
  const findRoom = rooms.find((room) => room.id === roomId);
  return <span>{findRoom ? findRoom.name : "Room not specified"}</span>;
};

export default DisplayRoom;
