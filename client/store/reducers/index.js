const initialState = {
    keepers: [],
    access_token: '',
    pets:[],
    orders:[],
    loading: true,
    socket: null,
    history: [],
    messages: [],
    keeper:{}
}

export default function reducer (state = initialState, action) {
    switch (action.type) {
        case 'FETCH_KEEPERS':
            return {...state, keepers: action.payload}
        case 'FETCH_KEEPER':
            return {...state, keeper: action.payload}
        case 'SET_TOKEN': 
            return {...state, access_token: action.payload};
        case 'ADD_PET':
            return {...state, pets:state.pets.concat(action.payload)};
        case 'SET_ORDERS':
            return {...state, orders: action.payload}
        case 'ADD_ORDERS':
           return {...state, orders: state.orders.concat(action.payload)}
        case 'FETCH_PETS':
            return {...state, pets: action.payload, loading: false}
        case 'UPDATE_KEEPER':
            return {...state, keepers: action.payload}
        case 'ADD_HISTORY' :
            return {...state, history: state.history.concat(action.payload)} 
        default:
            return state
    }
}