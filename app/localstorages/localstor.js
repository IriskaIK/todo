import { updateStorage } from "./updateStorage";

function checkstorage(Task, moveToProgress, moveToComplete, deleteElem){
    let storage = window.localStorage

    if(storage.getItem('counter') == null){
        storage.setItem('counter', '0')
    }

    const progress_area = document.querySelector('.progress_list')
    const complete_area = document.querySelector('.complete_list')
    if(storage!=0){
        for (let index = 0; index < parseInt(storage.getItem('counter')) ; index++) {
            console.log(index);
            let element = storage.getItem(index.toString());
            if (element==null){
                
            }
            else{
                let elemTextEnd = element.indexOf('@$', 0)
                let text = element.slice(0, elemTextEnd)
                let dateEnd = element.indexOf('@$', elemTextEnd+1)
                let date = element.slice(elemTextEnd+2, dateEnd)
                let pos = element.slice(dateEnd+2)
                let task = new Task(text, date)
                let cur_task = task.getHtml()
                cur_task.id = `${index}`
                if (pos=='progress_list'){
                    moveToProgress(cur_task, progress_area, deleteElem, updateStorage)
                    

                }
                else if(pos=='complete_list'){
                    cur_task.removeChild(cur_task.querySelector('.task_gear'))
                    cur_task.removeChild(cur_task.querySelector('.task_delete'))
                    let to_del = document.createElement('div')
                    to_del.className = 'progress_check'
                    cur_task.append(to_del)
                    
                    moveToComplete(cur_task, complete_area, deleteElem, updateStorage)
                }
                else{
                    document.querySelector(`.${pos} .task_list_inner`).append(cur_task)
                }
            }
        }
    }
   
}

export{
    checkstorage
}