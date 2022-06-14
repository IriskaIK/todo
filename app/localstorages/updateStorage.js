function updateStorage(task, pos){
    let id = task.id
    let text = task.querySelector('.task_text').innerHTML
    let date = task.querySelector('.task_date').innerHTML
    let storage = window.localStorage
    storage.setItem(id, `${text}@$${date}@$${pos}`)
}

export {
    updateStorage
}