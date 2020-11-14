const initialState = {
    access_token: '',
    pets:[]
}

export default function reducer (state = initialState, action) {
    switch (action.type) {
        case 'SET_TOKEN': 
            return {...state, access_token: action.payload};
        case 'ADD_PET':
            return {...state, pets:state.pets.concat(action.payload)};
        default:
            return state
    }
}