import { Link } from "react-router-dom";
import FetchWeather from "./weather/FetchWeather";
import "./Header.css";
const Header = () => {
  return (
    <header className="Header">
      <div>
        <ul classname="head" style={{ display: "inline-block" }}>
          <li>
            <h1>Making the Move</h1>{" "}
          </li>
          <div className="description">
            Striving to make a stressful move a little bit more organized. Use
            our packing list to create a complete list of items you need to
            pack. Check them off as you pack them and you'll have a tally of how
            many items you've packed so far!
          </div>
          <li>
            <FetchWeather />
          </li>
        </ul>

        <nav>
          <ul>
            <li className="routes">
              <Link to="/" style={{ textDecoration: "none" }}>
                <button className="link-button">Full List</button>
              </Link>
            </li>
            <li className="routes">
              <Link to="item" style={{ textDecoration: "none" }}>
                <button className="link-button">Add an Item</button>
              </Link>
            </li>
            <li className="routes">
              <Link to="room" style={{ textDecoration: "none" }}>
                <button className="link-button">Rooms</button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
