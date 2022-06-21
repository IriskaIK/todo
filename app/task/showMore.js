function toggleShow(area){
    area.addEventListener('click', (e)=>{
        if(e.target.classList.contains('fa-caret-down')){
            let text = e.target.parentElement.querySelector('.task_text')
            text.classList.toggle('toggleShow')
        }
    })
}

export{
    toggleShow
}