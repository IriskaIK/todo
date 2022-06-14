function removeFromStorage(item_id){
    let storage = window.localStorage
    storage.removeItem(item_id)
    // storage.setItem('counter', `${parseInt(storage.getItem('counter')) - 1}`)

}

export {
    removeFromStorage
}