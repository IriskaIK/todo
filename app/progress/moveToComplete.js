function moveToComplete(cur_task, complete_area, deleteElem){
    let del_btn = document.createElement('i')
    del_btn.className = 'task_delete fa-solid fa-circle-minus'
    
    deleteElem(cur_task.querySelector('.progress_check'))
    cur_task.append(del_btn)
    complete_area.append(cur_task)
}

export{
    moveToComplete
}