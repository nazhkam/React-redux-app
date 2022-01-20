const sonsInitialState = {
    son: '',
    son2: '',
}

export function reducer1(state = sonsInitialState, action) {
    switch (action.type) {
        case 'sonName':
            return { ...state, son: action.payLoad }
        case 'son2Name':
            return { ...state, son2: action.payLoad }
        default:
            return state;
    }
}