export const fetchKeepers = () => {
    return(dispatch) => {
        // console.log('masuk pak ekoooo')
        fetch(`http://192.168.100.6:3000/keepers`)
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