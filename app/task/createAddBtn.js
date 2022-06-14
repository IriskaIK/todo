
function createAddBtn(createInputTask, task_inner, getDate, deleteElem, Task, addToStorage){
    let add_btn = document.createElement('div')
    add_btn.className = 'task_add_btn'
    add_btn.innerHTML = `<div class="task_add_inner">
    <i class="fa-solid fa-plus"></i>
    <div class="div">Add new task</div>
    </div>`
    task_inner.append(add_btn)
    add_btn.addEventListener('click',()=>{
        createInputTask(task_inner, getDate, deleteElem, add_btn, Task, createAddBtn, addToStorage)
    })
}

export {
    createAddBtn
}