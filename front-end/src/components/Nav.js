import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  var auth = JSON.parse(localStorage.getItem("User"));
  const Logout = () => {
    localStorage.removeItem("User");
    window.location.reload(false);
  };

  let link = `http://localhost:3000/users/user/`;

  return (
    <div className="nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          {auth ? (
            <button onClick={Logout}>Logout</button>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </li>
        <li className="nav-profile">
          {auth ? (
            <div>
              {}
              <a href={link + auth.username}>{auth.name}</a>
            </div>
          ) : (
            <p></p>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Nav;
