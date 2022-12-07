import { useSelector } from "react-redux";
import { selectAllItems } from "./itemsSlice";
import DisplayRoom from "./DisplayRoom";
// import { Link } from "react-router-dom";
// import { toggleComplete } from "./itemsSlice";
import CountItems from "./CountAllItems";
import "./itemList.css";

const ItemsList = () => {
  // const dispatch = useDispatch();
  // const handleDeleteClick = () => {
  //   dispatch(deleteItem({}));
  // };
  // const handleCompleteClick = () => {
  //   dispatch(toggleComplete({ id: id, completed: !completed }));
  // };
  const items = useSelector(selectAllItems);
  console.log(items);
  const renderedItems = items.map((item) => (
    <div key={item.id}>
      <div className="itemList">
        {/* <input
          type="checkbox"
          className="mr-3"
          checked={item.completed}
          // onChange={handleCompleteClick}
        /> */}
        ✓{item.name} -
        <DisplayRoom roomId={item.roomId} className="roomInList" />
        {/* <button onClick={handleDeleteClick} className="btn btn-danger">
          delete
        </button> */}
        <p className="roomName">
          {/* <Link to={`item/${item.id}`}>View Item</Link> */}
        </p>
      </div>
    </div>
  ));

  return (
    <section className="itemList">
      <div className="itemList">
        <h2>Packing List</h2>
        {renderedItems}
        <CountItems />
      </div>
    </section>
  );
};

export default ItemsList;
