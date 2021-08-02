import React, { useState } from "react";
import "./App.css";
import Categories from "./Categories";
import items from "./data";
import Menu from "./Menu";

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState([]);
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories />
        <Menu />
      </section>
    </main>
  );
}

export default App;
