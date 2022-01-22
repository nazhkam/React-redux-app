import React from "react";

function Сategories({ items, onClick, activeCategory }) {
  return (
    <div className="categories">
      <ul>
      <li
          className={activeCategory === null ? 'active' : ''}
          onClick={() => onClick(null)}>
          Все
        </li>
        {items.map((name, index) => (
          <li
            className={activeCategory === index ? "active" : ""}
            onClick={() => onClick(index)}
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
