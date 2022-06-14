function moveToProgress(cur_task, area, deleteElem, updateStorage){
    let check_btn = document.createElement('i')
    check_btn.className = 'fa-solid fa-check progress_check'
    deleteElem(cur_task.querySelector('.task_delete'))
    deleteElem(cur_task.querySelector('.task_gear'))
    updateStorage(cur_task, 'progress_list')
    cur_task.append(check_btn)
    area.append(cur_task)
}

export{
    moveToProgress
}