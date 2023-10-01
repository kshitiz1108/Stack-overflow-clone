export const setCurrentUser = (data) => {
    return{
        type: 'CURRENT-USER',
        payload: data
    }
}