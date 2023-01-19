import React from "react";
import { Link, Outlet } from "react-router-dom";
import AboutLayout from "./AboutLayout";

function OriginalLayout() {
  return (
    <div>
      <h2>About Layout</h2>
      <>
        <nav>
          <ul>
            <li>{/* <Link to="/AboutLayout/1">Input 1</Link> */}</li>
            <li>
              <Link to="/about">input1</Link>
            </li>
            <li>
              <Link to="/about/input2">Input 2</Link>
            </li>
          </ul>
        </nav>
        <Outlet />
      </>
    </div>
  );
}

export default OriginalLayout;
