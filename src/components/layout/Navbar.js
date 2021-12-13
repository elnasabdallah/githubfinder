import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useKeycloak } from "@react-keycloak/web";
const Navbar = (props) => {
  const { keycloak } = useKeycloak();
  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className={props.icon}></i> {props.title}
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        {keycloak && !keycloak.authenticated && (
          <li>
            <button className="btn" onClick={() => keycloak.login()}>
              Login
            </button>
          </li>
        )}
        {keycloak && keycloak.authenticated && (
          <li>
            <button className="btn" onClick={() => keycloak.logout()}>
              Logout ({keycloak.tokenParsed.preferred_username})
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;

Navbar.defaultProps = {
  title: "Github Finder",
  icon: "fab fa-github",
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
