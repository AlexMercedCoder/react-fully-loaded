import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <>
      <h1>Header</h1>
      <Link to="/">|Home|</Link>
      <Link to="/other">|Other|</Link>
      <Link to="/another">|Another|</Link>
    </>
  );
};

export default Header;
