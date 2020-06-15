header.loadHeader();  //loading header component
footer.loadFooter(); //loading footer component

document.addEventListener("keyup",(event)=> {   //arrow key control from keyboard (for the entire application)
    let keyCode = event.keyCode;
    if(keyCode === 37) {
        paginationState.decrementPageNumber();
        updateAllComponents();
    } else if(keyCode === 39) {
        paginationState.incrementPageNumber();
        updateAllComponents();
    }
});

function updateAllComponents() {   // this function will be called by "state",  now body.loadbody() checks the "state"
    // and if there is any new change, then the corresponding divisions will update themselves. 
    body.loadBody();    //loading body component
    descDivComponent.updateShowing();
    descDivComponent.updateTotalItems();
}
