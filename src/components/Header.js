import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux/dist/react-redux";

const Header = () => {
  const [btnNameReact, updatedValue] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const data = useContext(UserContext);
  const { loggedInUser } = data;
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems.length);

  return (
    <div className="flex justify-between bg-green-100 shadow-md m-2">
      <div className="logo-container">
        <img className="w-56" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status:{onlineStatus ? "🟢" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contactus">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">
            <Link to="/cart">Cart ({cartItems.length} items)</Link>
          </li>
          <li>
            <button
              className="login"
              onClick={() => {
                btnNameReact == "Login"
                  ? updatedValue("Logout")
                  : updatedValue("Login");
              }}
            >
              {btnNameReact}
            </button>
          </li>
          <li className="px-4">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
