const InitialState = {
    items: [],
    isLoaded: false
}

export function pizzas(state = InitialState, action) {
    switch (action.type) {
        case 'SET_PIZZAS':
            return {
                ...state,
                items: action.payLoad,
                isLoaded: true,
            }
        case 'SET_LOADED':
            return {
                ...state,
                isLoaded: action.payLoad
            }
        default:
            return state
    }
    
}