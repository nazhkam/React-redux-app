const setPizzasInitialState = {
    items: []
}

export function setPizzas(state = setPizzasInitialState, action) {
    if (action.type === 'SET_PIZZAS') {
        return {
            ...state,
            items: action.payLoad
        }
    }
    else return state
}