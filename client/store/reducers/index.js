const initialState = {
    access_token: ''
}

export default function reducer (state = initialState, action) {
    switch (action.type) {
        case 'SET_TOKEN': 
            return {...state, access_token: action.payload}
        default:
            return state
    }
}