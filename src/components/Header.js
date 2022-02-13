import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header style={headerStyle}>
      <h1>Todo App</h1>
      <Link style={linkStyle} to="/">
        Home
      </Link>{" "}
      |{" "}
      <Link style={linkStyle} to="/favourites">
        Favorite
      </Link>{" "}
      |{" "}
      <Link style={linkStyle} to="/search">
        Search
      </Link>
    </header>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
};

const headerStyle = {
  background: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "10px",
};
