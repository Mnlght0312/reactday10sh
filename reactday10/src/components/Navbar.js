import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [selectedCategory, setSelectedCategory] = useState("Home");
  const categories = ["Home", "Contact", "About", "Books"];

  return (
    <nav>
      <div className="brand-name">
        <Link className="hhh" to={"/"}>
          My Site
        </Link>
      </div>
      <div className="book-layout">
        <ul>
          {categories.map((category) => (
            <li
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={category === selectedCategory ? "selected" : ""}
            >
              <Link className="hhh" to={`/${category}`}>
                {" "}
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
