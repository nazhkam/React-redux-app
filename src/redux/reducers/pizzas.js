const setPizzasInitialState = {
    pizzas: []
}

export function Pizzas(state = setPizzasInitialState, action) {
    if (action.type === 'SET_PIZZAS') {
        return {
            ...state,
            pizzas: action.payLoad
        }
    }
    else return state
}