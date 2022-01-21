import React from "react";

function Сategories({ items,onClick }) {
  const [activeItem, setActiveItem] = React.useState(0);
  const selectItem = (index) => {
    setActiveItem(index);
    onClick(index);
  };
  return (
    <div className="categories">
      <ul>
        {items.map((name, index) => (
          <li
            className={activeItem === index ? "active" : ""}
            onClick={() => selectItem(index)}
            key={`${name}+${index}`}
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Сategories;
