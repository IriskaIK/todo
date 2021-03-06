function createInputTask(task_inner, getDate, deleteElem, task_add, Task, createAddBtn, addToStorage){
    let task_input = document.createElement('div') 
    task_input.className = 'task_input'
    task_input.innerHTML = `<input type="text" class="task_input_text"></input>
                                <div class="task_input_date">${getDate()}</div>
                            <i class="fa-solid fa-check task_check_input"></i>`
    task_inner.append(task_input)
    deleteElem(task_add)
    document.querySelector('.task_check_input').addEventListener('click', ()=>{
        let task = new Task(document.querySelector('.task_input_text').value, getDate())
        deleteElem(task_input)
        task_inner.append(task.getHtml())
        
        createAddBtn(createInputTask, task_inner, getDate, deleteElem, Task)
    })
    document.querySelector('.task_check_input').addEventListener('click', ()=>{
        let task = new Task(document.querySelector('.task_input_text').value, getDate())
        deleteElem(task_input)
        let text = task.getText()
        let id = addToStorage(text, getDate(), 'task_list')
        let task_cur = task.getHtml()
        task_cur.id = id
        task_inner.append(task_cur)

        
        createAddBtn(createInputTask, task_inner, getDate, deleteElem, Task, addToStorage)
    })
    document.querySelector('.task_input_text').addEventListener('keypress', (e)=>{
        if (e.key ==='Enter'){
            let task = new Task(document.querySelector('.task_input_text').value, getDate())
            let text = task.getText()
            let id = addToStorage(text, getDate(), 'task_list')
            deleteElem(task_input)
            let task_cur = task.getHtml()
            task_cur.id = id

            task_inner.append(task_cur)
            createAddBtn(createInputTask, task_inner, getDate, deleteElem, Task, addToStorage)
        }
        
    })
}

export{
    createInputTask
}