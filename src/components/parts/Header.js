import React from "react";
import { Link } from "react-router-dom";
import { useGlobal } from "../gstate";

const Header = (props) => {
  const { state, dispatch } = useGlobal();
  console.log("GLOBAL STATE ASSETS:", state, dispatch);
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
