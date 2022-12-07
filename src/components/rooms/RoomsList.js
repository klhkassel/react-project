import { useSelector } from "react-redux";
import { selectAllRooms } from "./roomsSlice";
import { Link } from "react-router-dom";
import "./roomList.css";

const RoomsList = () => {
  const rooms = useSelector(selectAllRooms);
  const renderedRooms = rooms.map((room) => (
    <li className="roomList">
      {/* <Link to={`/room/${room.id}`}> */}
         {room.name}
        {/* <img src={room.image} alt="roomImage" className="roomImage" /> */}
      {/* </Link> */}
    </li>
  ));
  return (
    <div>
      <h2>Rooms</h2>
      
      <ul className="rooms-list">{renderedRooms}</ul>
    </div>
  );
};
export default RoomsList;
