import axios from 'axios'

export function fetchKeepers ()  {
    return(dispatch) => {
        // console.log('masuk pak ekoooo')
        fetch(`http://192.168.43.190:3000/keepers`)
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

export function fetchOrders(token) {
    return (dispatch) => {
        axios({
            url: 'http://192.168.43.190:3000/orders',
            method: 'GET',
            headers:{access_token: token}
          })
          .then(({data}) => {
            //console.log(data, '<<<<<<<RESPONYA');
            dispatch(setOrders(data))
          })
          .catch(err => console.log(err,'ini error fetch orders'))
    }
}

export function fetchPets(token) {
    return(dispatch) => {
        axios({
            url: 'http://192.168.43.190:3000/pets',
            method: 'GET',
            headers: {access_token: token}
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
//fetch aji : http://192.168.8.100
//fetch aji-wifi : 192.168.43.190
//fetch aji wifi2 : 192.168.1.103

//access_aji : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmYjEwOTc1NGE4MjQ0MDQ1NGNhNmM2MSIsImVtYWlsIjoiYWJjZEBtYWlsLmNvbSIsImlhdCI6MTYwNTQzNzg2OH0.CHnIsDmwmKkEg7ESV_VAL6bUM0m5SDUKY14X8ibMJKo