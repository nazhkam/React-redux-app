import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { setSortBy, setCategory } from '../redux/actions/setFilters';
import { addPizzaToCart } from "../redux/actions/setPizzas"

import { Categories, SortPopup, PizzaBlock, PizzaLoadingBlock } from "../components";
import { fetchPizzas } from '../redux/actions/setPizzas';


const sortItems = [
  { name: "Популярности",type: "rating"},
  { name: "Цене", type: "price" },
  { name: "Алфавиту", type: "name" },
];
const categoryItems = [
  "Мясные",
  "Вегетерианские",
  "Гриль",
  "Острые",
  "Закрытые",
];

function Home() {

  const dispatch = useDispatch();
  const pizzas = useSelector(({ pizzas }) => pizzas.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const {category,sortBy}=useSelector(({filters})=>filters);

  React.useEffect(() => {
    dispatch(fetchPizzas(category,sortBy))
  }, [category,sortBy]);

  const setActiveCategory=(index)=>{
    dispatch(setCategory(index))
  }
  const setActiveSort=(type)=>{
    dispatch(setSortBy(type))
  }
  const addPizza=(obj)=>{
    dispatch(addPizzaToCart(obj))
  }
  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories items={categoryItems} onClick={setActiveCategory} activeCategory={category}/>
          <SortPopup items={sortItems} onClick={setActiveSort} activeSort={sortBy}/>
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {isLoaded ? pizzas.map((item, index) => (
            <PizzaBlock key={index} {...item} onClick={addPizza}/>
          )): Array(4).fill(0).map((_,index)=> <PizzaLoadingBlock key={index} />)}
        </div>
      </div>
    </div>
  );
}

export default Home;
