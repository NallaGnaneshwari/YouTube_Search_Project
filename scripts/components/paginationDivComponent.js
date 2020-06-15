// //This script is for changes in paginationDivComponent - 1st extreme page, last extreme page, next page, previous page


let paginationDivComponent = ( function() {

    return {
        createPaginationDivComponent : createPaginationDivComponent
    }

    function createPaginationDivComponent() {
        let paginationDiv = document.createElement("div");
        paginationDiv.setAttribute("id","pagination-div")
        //Input
        let paginationInput = document.createElement("input");
        paginationInput.setAttribute("id", "pageNumber");
        paginationInput.setAttribute("type", "number");
        paginationInput.setAttribute("value", "0");
        paginationInput.classList.add("form-control-sm");
        paginationInput.classList.add("footer-input");
    
        //Total Page number count
        let paginationPageNumberCount = document.createElement("label");
        paginationPageNumberCount.setAttribute("id", "totalPageNumbers");
        paginationPageNumberCount.classList.add("footer-pagenumber-text");
        paginationPageNumberCount.textContent = " / 0 ";
    
        //Pagination Next Page
        let paginationNextElement = document.createElement("i");
        paginationNextElement.setAttribute("id", "nextPage");
    
        paginationNextElement.classList.add("right");
    
        //Pagination Previous Page
        let pagiantionPreviousElement = document.createElement("i");
        pagiantionPreviousElement.setAttribute("id", "previousPage");
    
        pagiantionPreviousElement.classList.add("left");
    
        //Pagination First Page
        let paginationFirstElement = document.createElement("i");
        paginationFirstElement.setAttribute("id", "firstPage");
        paginationFirstElement.classList.add("left");
    
        //Pagination Last Page
        let paginationLastElement = document.createElement("i");
        paginationLastElement.setAttribute("id", "lastPage");
        paginationLastElement.classList.add("right");
    
        //Listeners
        paginationInput.addEventListener("change", () => {
            paginationState.setPageNumber(paginationInput.value);
            updateAllComponents();
        });
    
        pagiantionPreviousElement.addEventListener("click", () => {
            paginationState.decrementPageNumber();
            updateAllComponents();
        });
    
        paginationNextElement.addEventListener("click", () => {
            paginationState.incrementPageNumber();
            updateAllComponents();
        });
    
        paginationFirstElement.addEventListener("click", () => {
            paginationState.setPageNumberToFirst();
            updateAllComponents();
        });
    
        paginationLastElement.addEventListener("click", () => {
            paginationState.setPageNumberToLast();
            updateAllComponents();
        });
    
        paginationDiv.appendChild(paginationFirstElement);
        paginationDiv.appendChild(pagiantionPreviousElement);
        paginationDiv.appendChild(paginationInput);
        paginationDiv.appendChild(paginationPageNumberCount);
        paginationDiv.appendChild(paginationNextElement);
        paginationDiv.appendChild(paginationLastElement);
    
        return paginationDiv;
    }
}
)();
