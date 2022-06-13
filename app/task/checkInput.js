function checkInput(Task, getDate, task_input, task_inner, createAddBtn){
    document.querySelector('.task_check_input').addEventListener('click', ()=>{
        let task = new Task(document.querySelector('.task_input_text').value, getDate())
        deleteElem(task_input)
        task_inner.append(task.getHtml())
        task_inner.append(createAddBtn())
    })
}

export{
    checkInput
}

