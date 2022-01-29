import axios from 'axios';

export const setLoaded=(payload)=>({
    type:'SET_LOADED',
    payload
})
export const addPizzaToCart=(payload)=>({
    type: 'ADD_PIZZA_TO_CART',
    payload
} )
export const incrementPizza=(id)=>({
    type:'INCREMENT_PIZZA',
    id
})
export const decrementPizza=(id)=>({
    type:'DECREMENT_PIZZA',
    id
})

export const fetchPizzas =(category,sortBy) => (dispatch)=>{
    dispatch(setLoaded(false));
    axios.get(`http://localhost:3001/pizzas?${
        category !==null ? `category=${category}`: ''}&_sort=${sortBy}`)
        .then(({data})=>{dispatch(setPizzas(data))});  
    
}

export const setPizzas = (value) => ({
    type: 'SET_PIZZAS',
    payLoad: value
})

