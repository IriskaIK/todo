import {Task} from './task/classTask'
import {createAddBtn} from './task/createAddBtn'
import {createInputTask} from './task/createInputTask'
import{deleteTask} from './task/deleteTask'
import{moveToComplete} from './progress/moveToComplete'
import{moveToProgress}from './task/moveToProgress'

function deleteElem(elem){
    elem.parentElement.removeChild(elem)
}
function show(elem){
    elem.style.display = 'block'
}

function getDate(){
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;
    return today
}

document.addEventListener('DOMContentLoaded', ()=>{
    const td_area = document.querySelector('.td_inner')
    const task_inner = document.querySelector('.task_list_inner')
    const progress_area = document.querySelector('.progress_list')
    const complete_area = document.querySelector('.complete_list')
    deleteTask(td_area, deleteElem)
    createAddBtn(createInputTask, task_inner, getDate, deleteElem, Task)

    progress_area.addEventListener('click', (e)=>{
        if (e.target.classList.contains('progress_check')){
            let cur_task = e.target.parentElement
            moveToComplete(cur_task, complete_area, deleteElem)
        }
    })
    task_inner.addEventListener('click', (e)=>{
        if(e.target.classList.contains('task_gear')){
            let cur_task = e.target.parentElement
            moveToProgress(cur_task, progress_area, deleteElem)
        }
    })



    
})

