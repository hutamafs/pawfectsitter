const initialState = {
    keepers: [],
    access_token: '',
    pets:[],
    orders:[],
    loading: true,
    socket: null,
    messages: []
}

export default function reducer (state = initialState, action) {
    switch (action.type) {
        case 'FETCH_KEEPERS':
            return {...state, keepers: action.payload}
        case 'SET_TOKEN': 
            return {...state, access_token: action.payload};
        case 'ADD_PET':
            return {...state, pets:state.pets.concat(action.payload)};
        case 'SET_ORDERS':
            return {...state, orders: state.orders.concat(action.payload)}
        case 'FETCH_PETS':
            return {...state, pets: action.payload, loading: false}
        case 'SET_SOCKET':
            return {...state, socket: action.payload}
        case 'SET_MESSAGES':
            return {...state, messages: state.messages.concat(action.payload)}
        default:
            return state
    }
}