function addToStorage(text, date, pos){
    let storage = window.localStorage
    let cur_id = storage.getItem('counter')
    storage.setItem(storage.getItem('counter'), `${text}@$${date}@$${pos}`)
    storage.setItem('counter', `${parseInt(storage.getItem('counter')) + 1}`)
    return cur_id
}

export{
    addToStorage
}