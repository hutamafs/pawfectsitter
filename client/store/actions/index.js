export function fetchKeepers ()  {
    return(dispatch) => {
        // console.log('masuk pak ekoooo')
        fetch(`http://192.168.1.3:3000/keepers`)
        .then(resp => resp.json())
        .then(resp => {
            // console.log(resp, 'resp dari fetch')
            dispatch({
            type: 'FETCH_KEEPERS',
            payload: resp
        })})
        .catch(err => {
            console.log(err)
            console.warn
        })
    }
}
export function setToken(payload) {
    return {
        type: 'SET_TOKEN',
        payload
    }
}

export function addPet(payload) {
    return {
        type: 'ADD_PET',
        payload

    }
}

// fetch hutama : http://192.168.1.3:3000
// fetch nasrul : http://192.168.100.6:3000