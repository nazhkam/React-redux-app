const InitialState = {
    items: [],
    totalCount: 0,
    totalPrice: 0

}

export function cartPizzas(state = InitialState, action) {
    switch (action.type) {
        case 'ADD_PIZZA_TO_CART':{
            const newItem = {
                ...state.items,
                [action.payload.id]: !state.items[action.payload.id] ? [action.payload] : [...state.items[action.payload.id], action.payload]
            }
            const allPizzas = [].concat.apply([], Object.values(newItem))
            const totalPrice = allPizzas.reduce((sum, item) => sum + item.price, 0)
            return ({
                ...state,
                items: newItem,
                totalPrice,
                totalCount: allPizzas.length

            })}
        case 'INCREMENT_PIZZA':{
            const newItem = {
                ...state.items,
                [action.id]:[...state.items[action.id], state.items[action.id][0]]
            }
            const allPizzas = [].concat.apply([], Object.values(newItem))
            const totalPrice = allPizzas.reduce((sum, item) => sum + item.price, 0)

            return ({
                ...state,
                items: newItem,
                totalPrice,
                totalCount: allPizzas.length
            })}
        default:
            return state;
    }
}