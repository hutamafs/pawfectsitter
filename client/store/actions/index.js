import axios from 'axios'

export function fetchKeepers ()  {
    return(dispatch) => {
        // console.log('masuk pak ekoooo')
        fetch(`http://192.168.100.6:3000/keepers`)
        .then(resp => resp.json())
        .then(resp => 
            dispatch({
            type: 'FETCH_KEEPERS',
            payload: resp
        }))
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

export function setOrders(payload) {
    return {
        type:'SET_ORDERS',
        payload
    }
}

export function fetchOrders() {
    return (dispatch) => {
        axios({
            url: 'http://192.168.100.6:3000/orders',
            method: 'GET',
            headers:{access_token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmYjA5NGNkMjU5ZTlkMDE5MDlkYmIwNiIsImVtYWlsIjoidGFtYUBnbWFpbC5jb20iLCJpYXQiOjE2MDU0MDc5NTF9.sEH3tA-RFJt21XnkDVOFDVRJuQK77uOHL9i3Usnt7t4'}
          })
          .then(({data}) => {
            //console.log(data, '<<<<<<<RESPONYA');
            dispatch(setOrders(data))
          })
          .catch(err => console.log(err,'ini error fetch orders'))
    }
}

export function fetchPets() {
    return(dispatch) => {
        axios({
            url: 'http://192.168.100.6:3000/pets',
            method: 'GET',
            headers: {access_token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmYjEwYmUzNWU4ODkxMTU3YzMwYTFjMCIsImVtYWlsIjoic3VzYW5AbWFpbC5jb20iLCJpYXQiOjE2MDU0Mzg1NTl9.XC6fVC7Oo8BEN7o1f4t04T31SaLEVL8xhhxlYarjkgo'}
          })
          .then((res) => {
            //console.log(res.data, '<<<<<<<RESPONYA');
            dispatch({
                type: 'FETCH_PETS',
                payload: res.data
            })
          })
          .catch((err) => {
            console.log(err, '<<<<<<<<<ERRRRRROOORRRRRR');
          })
    }    
}


// fetch hutama : http://192.168.1.3:3000
// fetch nasrul : http://192.168.100.6:3000