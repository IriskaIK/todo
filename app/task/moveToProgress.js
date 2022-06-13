function moveToProgress(cur_task, area, deleteElem){
    let check_btn = document.createElement('i')
    check_btn.className = 'fa-solid fa-check progress_check'
    
    deleteElem(cur_task.querySelector('.task_delete'))
    deleteElem(cur_task.querySelector('.task_gear'))
    cur_task.append(check_btn)
    area.append(cur_task)
}

export{
    moveToProgress
}