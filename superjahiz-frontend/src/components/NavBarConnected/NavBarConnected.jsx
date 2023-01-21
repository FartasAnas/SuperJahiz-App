import React, { useEffect, useState } from "react";
import './NavBarConnected.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { Link, useLocation } from "react-router-dom";
function NavBarConnected() {
    const user = JSON.parse(localStorage.getItem("user"));
    const [username, setUsername] = useState(
      <Link to="/login">
        <div className="NavBarConnected-user">
          Login
          <span className="NavBarConnected-user-icon">
            <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>
          </span>
        </div>
      </Link>
    );
    const location = useLocation();
    const logOut = async (e) => {
      localStorage.removeItem("user");
    };
    useEffect(() => {
        if (user && user.appuser) {
          setUsername(
            <Link to="/home" onClick={logOut}>
              <div className="NavBarConnected-user">
                {user.appuser}
                <span className="NavBarConnected-user-icon">
                  <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>
                </span>
              </div>
            </Link>
          );
        } else {
          setUsername(
            <Link to="/login">
              <div className="NavBarConnected-user">
                Login
                <span className="NavBarConnected-user-icon">
                  <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>
                </span>
              </div>
            </Link>
          );
        }
    }, [location])
    
  return (
    <div className="NavBarConnected">
      <div className="NavBarConnected-orders">Orders</div>
      <Link to="/cart">
        <div className="NavBarConnected-cart">
          Cart
          <span className="NavBarConnected-cart-icon">
            <FontAwesomeIcon icon={faCartArrowDown}></FontAwesomeIcon>
          </span>
        </div>
      </Link>
      {username}
    </div>
  );
}

export default NavBarConnected