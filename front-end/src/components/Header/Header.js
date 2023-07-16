import React from "react";
import { NavLink } from "react-router-dom";

const headerStyles = {
  backgroundColor: "#f2f2f2",
  padding: "20px",
  display: "flex",
  justifyContent: "space-between",
};

const logoStyles = {
  margin: "0",
  fontSize: "24px",
};

const navStyles = {
  display: "flex",
  alignItems: "center",
};

const linkStyles = {
  textDecoration: "none",
  color: "white",
  padding: "10px",
  marginLeft: "10px",
  backgroundColor: "red",
  border: "1px solid red",
  borderRadius: "10px",
};

const Header = () => {
  return (
    <header style={headerStyles}>
      <h1 style={logoStyles}>Your Website Name</h1>

      <nav style={navStyles}>
        <NavLink exact to="/" style={linkStyles}>
          Home
        </NavLink>
        <NavLink to="/admin" style={linkStyles}>
          Admin
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
