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