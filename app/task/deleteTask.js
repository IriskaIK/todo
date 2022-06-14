import { removeFromStorage } from "../localstorages/removeFromStorage"

function deleteTask(task_inner, deleteElem){
    task_inner.addEventListener('click', (e)=>{
        if(e.target.classList.contains('task_delete')){
            removeFromStorage(e.target.parentElement.id)
            deleteElem(e.target.parentElement)
        }

    })
}
export{
    deleteTask
}