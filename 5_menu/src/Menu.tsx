import React from "react";
type MenuItems = {
  items: {
    id: number;
    title: string;
    category: string;
    price: number;
    img: string;
    desc: string;
  }[];
};
const Menu: React.FC<MenuItems> = ({ items }) => {
  return <div></div>;
};

export default Menu;
