import { useSelector } from "react-redux";
import { selectRoomById } from "./roomsSlice";
import { selectAllItems } from "../items/itemsSlice";
import { Link, useParams } from "react-router-dom";

const RoomPage = () => {
  const { roomId } = useParams;
  const room = useSelector((state) => selectRoomById(state, Number(roomId)));

  const itemsInRoom = useSelector((state) => {
    const allItems = selectAllItems(state);
    return allItems.filter((item) => room.roomId === Number(roomId));
  });

  const itemNames = itemsInRoom.map((item) => (
    <li key={item.id}>
      {/* <Link to={`/item/${item.id}`}>{itemNames}</Link> */}
    </li>
  ));
};

export default RoomPage;
