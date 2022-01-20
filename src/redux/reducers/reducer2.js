const badSonInitialState = {
    badSon: []
}

export function reducer2(state = badSonInitialState, action) {
    if (action.type === 'BAD_SON') {
        return {
            ...state,
            badSon: action.payLoad
        }
    }
    else return state
}