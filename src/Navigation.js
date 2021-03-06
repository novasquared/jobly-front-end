import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
import UserContext from "./UserContext";

/** NavBar for Jobly App
 * 
 *  Props: 
 *  - None
 * 
 *  State:
 *  - None
 * 
 *  App -> Navigation
 * 
 */

function Navigation({ handleLogout }) {
  const currentUser = useContext(UserContext);

  return (
    <nav className="Navigation navbar navbar-dark bg-primary navbar-expand-md">
      <div className="container-fluid">
        <NavLink exact to="/" className="navbar-brand ms-3">
          Jobly
        </NavLink>
        {currentUser && <ul className="navbar-nav ms-auto">
          <li className="nav-item me-4" >
            <NavLink exact to="/companies" id="Navigation-link-companies">
              Companies
            </NavLink>
          </li>
          <li className="nav-item me-4" >
            <NavLink exact to="/jobs" id="Navigation-link-jobs">
              Jobs
            </NavLink>
          </li>
          <li className="nav-item me-4" >
            <NavLink exact to="/profile" id="Navigation-link-profile">
              Profile
            </NavLink>
          </li>
          <li className="nav-item me-4" >
            <NavLink exact to="/" id="Navigation-link-logout" onClick={handleLogout}>
              Logout
            </NavLink>
          </li>
        </ul>}
        {!currentUser && <ul className="navbar-nav ms-auto">
          <li className="nav-item me-4" >
            <NavLink exact to="/login" id="Navigation-link-login">
              Login
            </NavLink>
          </li>
          <li className="nav-item me-4 text-nowrap" >
            <NavLink exact to="/signup" id="Navigation-link-signup">
              Sign Up
            </NavLink>
          </li>
        </ul>}
      </div>
    </nav>
  );
}
export default Navigation;