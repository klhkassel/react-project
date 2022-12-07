//form input is temporary state - not global
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemAdded } from "./itemsSlice";
import { selectAllRooms } from "../rooms/roomsSlice";
import { useNavigate } from "react-router-dom";
import "./AddItemInput.css";

const AddItemInput = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [itemName, setItemName] = useState("");
  const [roomId, setRoomId] = useState("");
  const rooms = useSelector(selectAllRooms);

  const onItemNameChanged = (e) => setItemName(e.target.value);
  const onRoomChanged = (e) => setRoomId(e.target.value);

  const onSaveItemClicked = () => {
    if ((itemName, roomId)) {
      console.log(itemName, roomId);
      console.log(selectAllRooms);
      dispatch(itemAdded(itemName, roomId));
      setItemName("");
      setRoomId("");
      navigate("/");
    }
  };

  const roomOptions = rooms.map((room) => (
    <option key={room.id} value={room.id}>
      {room.name}
    </option>
  ));

  return (
    <section className="addItemForm">
      <h2>Add an Item</h2>
      <form>
        <input type="text" placeholder="enter the item" value={itemName} onChange={onItemNameChanged} />
        <select
          id="roomName"
          value={roomId}
          onChange={onRoomChanged}
        >
          <option value="">select a room</option>
          {roomOptions}
        </select>
        <button type="button" onClick={onSaveItemClicked}>
          Save item
        </button>
      </form>
    </section>
  );
};
export default AddItemInput;
