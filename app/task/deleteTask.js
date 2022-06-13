function deleteTask(task_inner, deleteElem){
    task_inner.addEventListener('click', (e)=>{
        if(e.target.classList.contains('task_delete')){
            deleteElem(e.target.parentElement)
        }

    })
}
export{
    deleteTask
}