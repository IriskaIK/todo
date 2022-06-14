import { updateStorage } from "../localstorages/updateStorage";

function dragDrop(deleteElem, moveToComplete, moveToProgress){



    let dragged
    document.addEventListener("drag", function( event ) {

    }, false);

    document.addEventListener("dragstart", function( event ) {
        // store a ref. on the dragged elem
        if (event.target.className == 'task_item'){
            dragged = event.target;

        }
        else if(event.target.parentElement.className =='task_item'){
            dragged = event.target.parentElement;

        }
        // make it half transparent
    }, false);

    document.addEventListener("dragend", function( event ) {
        // reset the transparency
        dragged.style.opacity = "";
    }, false);

    /* events fired on the drop targets */
    document.addEventListener("dragover", function( event ) {
        // prevent default to allow drop
        event.preventDefault();
    }, false);

    document.addEventListener("dragenter", function( event ) {
        // highlight potential drop target when the draggable element enters it
        if ( event.target.classList.contains("td_item")) {
            event.target.style.background = "#b3b3b3";
        }

        

    }, false);

    document.addEventListener("dragleave", function( event ) {
        // reset background of potential drop target when the draggable element leaves it
        if ( event.target.classList.contains("td_item")) {
            event.target.style.background = "";
        }

    }, false);

    document.addEventListener("drop", function( event ) {
        // prevent default action (open as link for some elements)
        event.preventDefault();
        // move dragged elem to the selected drop target
        if ( event.target.classList.contains("progress_list") && dragged.parentElement.parentElement.classList.contains('task_list') ) {
            event.target.style.background = "";
            dragged.style.marginBottom = '0 px'
            console.log('1')
            moveToProgress(dragged, event.target.querySelector('.task_list_inner'), deleteElem, updateStorage)
        }
        else if(event.target.classList.contains("complete_list") && dragged.parentElement.parentElement.classList.contains('progress_list')){
            event.target.style.background = "";
            dragged.style.marginBottom = '0 px'
            console.log()
            moveToComplete(dragged, event.target.querySelector('.task_list_inner'), deleteElem, updateStorage)
        }
        else{
            event.target.style.background = "";

        }
    
    }, false);

}

export{
    dragDrop
}