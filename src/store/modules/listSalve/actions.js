export function addList (data){

    return{
        type: 'ADD_LIST',
        data
    }
}

export function removeList (data){

    return{
        type: 'REMOVE_LIST',
        data
    }
}