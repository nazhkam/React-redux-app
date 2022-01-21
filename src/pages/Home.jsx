import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { setSortBy, setCategory } from '../redux/actions/filters';

import { Categories, SortPopup, PizzaBlock } from "../components";
function Home() {

  const dispatch = useDispatch();
  const pizzas = useSelector(({ setPizzas }) => setPizzas.items);

  const sortItems = [
    {
      name: "Популярности",
      type: "popular",
    },
    { name: "Цене", type: "price" },
    { name: "Алфавиту", type: "name" },
  ];
  const categoryItems = [
    "Все",
    "Мясные",
    "Вегетерианские",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories items={categoryItems} onClick={(index)=>dispatch(setCategory(index))} />
          <SortPopup olditems={sortItems} onClick={(index)=>dispatch(setSortBy(sortItems[index].type))}/>
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
