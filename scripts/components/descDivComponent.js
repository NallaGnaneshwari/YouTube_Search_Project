//This script is for changes in descDivComponent

var descDivComponent = (function () {
    return {
        createDescDivComponent: createDescDivComponent,
        updateShowing: updateShowing,
        updateTotalItems: updateTotalItems
    }

    function createDescDivComponent() {
        let descDiv = document.createElement("div"); //creates a new html element
        descDiv.setAttribute("id","desc-div")
        descDiv.classList.add("header-desc");

        //Total Items
        let headerTotalItems = document.createElement("label");
        headerTotalItems.setAttribute("id", "totalItems");
        headerTotalItems.classList.add("header-total-items");  //manipulating class attributes of an element

        //Showing
        let showing = document.createElement("label");
        showing.setAttribute("id", "showing");
        showing.classList.add("header-showing");

        descDiv.appendChild(headerTotalItems); // adds a node to the end of the list of children of a specified parent node
        descDiv.appendChild(showing);

        return descDiv;
    }

    function updateShowing() {  // this will be triggered when we change the page (let's say we move to front page or back page)
        let totalLength = bodyState.getResultSetLength();
        // console.log("total length : "+totalLength);
        // console.log("pagenumber : "+paginationState.getPageNumber());
        // console.log("items per page : "+paginationState.getItemsPerPage());
        let showingContent = document.querySelector("#showing");
        if (totalLength > 0) {
            pgno = paginationState.getPageNumber() - 1;
            let lowerLimit = (pgno * paginationState.getItemsPerPage() + 1);
            let upperLimit = Math.min(totalLength, (pgno * paginationState.getItemsPerPage() + paginationState.getItemsPerPage()))
            showingContent.textContent = "Showing : ( " + lowerLimit + " - " + upperLimit + " )";
        } else {
            showingContent.textContent = "";
        }
    }

    function updateTotalItems() {
        let totalItems = bodyState.getResultSet().length;

        let headerTotalItems = document.getElementById("totalItems");
        if (headerState.getSearchString().length !== 0)
            headerTotalItems.textContent = "Found " + totalItems + " item(s).";
        else {
            headerTotalItems.textContent = "";
        }
        let footerPageNumberElement = document.getElementById("totalPageNumbers");
        footerPageNumberElement.textContent = " / " + Math.ceil(totalItems / paginationState.getItemsPerPage());
    }



})();
