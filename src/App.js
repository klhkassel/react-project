// import Counter from "./features/counter/Counter";
import ItemsList from "./components/items/ItemsList";
import AddItemInput from "./components/items/AddItemInput";
// import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import RoomsList from "./components/rooms/RoomsList";
import RoomPage from "./components/rooms/RoomPage";

function App() {
  return (
    <div className="App">
      <Header />
      <div
        style={{
          backgroundImage: "url(/background.jpg)",
          height: "100vh",
          width: "200vh",
          backgroundRepeat: "no-repeat",
          position: "relative",
        }}
      >
        <Routes>
          {/* home page */}
          <Route index element={<ItemsList />} />
          <Route path="item">
            <Route index element={<AddItemInput />} />
          </Route>
          <Route path="room">
            <Route index element={<RoomsList />} />
            <Route path=":roomId" element={<RoomPage />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
