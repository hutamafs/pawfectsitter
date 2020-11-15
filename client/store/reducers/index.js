const initialState = {
    keepers: [],
    access_token: '',
    pets:[],
<<<<<<< HEAD
    orders:[]
=======
    loading: true
>>>>>>> 19d48e538b811cac522b4a94eb7be9f430c6b4cc
}

export default function reducer (state = initialState, action) {
    switch (action.type) {
        case 'FETCH_KEEPERS':
            return {...state, keepers: action.payload}
        case 'SET_TOKEN': 
            return {...state, access_token: action.payload};
        case 'ADD_PET':
            return {...state, pets:state.pets.concat(action.payload)};
<<<<<<< HEAD
        case 'SET_ORDERS':
            return {...state, orders: action.payload}
=======
        case 'FETCH_PETS':
            return {...state, pets: action.payload, loading: false}
>>>>>>> 19d48e538b811cac522b4a94eb7be9f430c6b4cc
        default:
            return state
    }
}