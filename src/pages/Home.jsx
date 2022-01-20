import React from "react";
import { Categories, SortPopup, PizzaBlock } from "../components";

function Home({ pizzas }) {
  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories
            items={[
              "Все",
              "Мясные",
              "Вегетерианские",
              "Гриль",
              "Острые",
              "Закрытые",
            ]}
          />
          <SortPopup items={["Популярности", "Цене", "Алфавиту"]} />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {pizzas.map((item, index) => (
            <PizzaBlock key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
