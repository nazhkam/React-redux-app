const InitialState = {
    sortBy: 'rating',
    category:null
}

export function filters(state = InitialState, action) {
    switch (action.type) {
        case 'SET_SORT_BY':
            return { ...state, sortBy: action.payLoad }
        case 'SET_CATEGORY':
                return { ...state, category: action.payLoad }
        default:
            return state;
    }
}