const initialState = {
    keepers: []
}

export default function reducer (state = initialState, action) {
    switch (action.type) {
        case 'FETCH_KEEPERS':
            return {...state, keepers: action.payload}
        default:
            return state
    }
}