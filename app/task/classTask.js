class Task{
    constructor(text, date){
        this.text = text
        this.date =date;
        this.html= document.createElement('div')
        this.html.className ='task_item' 
        this.html.innerHTML= `
            <i class="fa-solid fa-caret-down"></i>
            <div class="task_text td_text">${this.text}</div>
            <div class="task_date">${this.date}</div>
            <i class="fa-solid fa-gears task_gear"></i>
            <i class="task_delete fa-solid fa-circle-minus"></i>
        `
    }
    getHtml(){
        return this.html
    }
}

export {
    Task
} 