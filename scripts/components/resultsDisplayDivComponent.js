//This script is for changes in resultDisplayDivComponent
//called by body.js


var resultsDisplayDivComponent = (function () {

    return {
        createResultsDisplayDivComponent: createResultsDisplayDivComponent,
        openNewTab : openNewTab
    }

    function openNewTab(url) {
        console.log(url);
        window.open(url);
    }

    function createResultsDisplayDivComponent() {
        let displayDiv = document.createElement("div");
        displayDiv.setAttribute("id", "display-div");
        let resultSetLength = bodyState.getResultSetLength();  // number of results
        let resultData = bodyState.getResultSet();   //what all data has been fetched
        if (resultData != undefined && resultSetLength !== 0) {
            displayDiv.classList.add("grid-container");

            let startIndex = paginationState.getPageNumber();  // if we move left or right, that will be reported to pagennation state and then upadtebody() will be called, and body will get the latest value of numbers from state.
            let itemsPerPage = paginationState.getItemsPerPage(); 

            if (startIndex > Math.ceil(resultSetLength / itemsPerPage) || startIndex <= 0) {
                paginationState.refreshPageNumber();
                startIndex = paginationState.getPageNumber();
            }

            if (startIndex === 1) {
                startIndex = 0;
            } else {
                startIndex = (startIndex - 1) * itemsPerPage;
            }

            for (let i = startIndex; i < startIndex + itemsPerPage && i < resultSetLength; i++) {
                let {
                    snippet,
                    id,
                    statistics
                } = resultData[i];
                itemDiv = eachCardDivComponent.createEachCardDivComponent(snippet, id, statistics);  // this returns a div
                displayDiv.appendChild(itemDiv);  // results display div

                itemDiv.addEventListener("click", () => {
                    const url = "https://www.youtube.com/watch?v=" + id;
                    console.log("Hello")
                    openNewTab(url);
                    // event.stopPropagation();
                });
            }

            // displayDiv.addEventListener("click", (event) => {
            //     // console.log(event.path[1]);
            //     id = event.path[1].id;
            //     console.log(id);
            //     if (id.length > 0 && id !== "body") {
            //         const url = "https://www.youtube.com/watch?v=" + id;
            //         openNewTab(url);
            //     }

            // });


        } else { //no results found
            paginationState.setPageNumber(0);
            displayDiv.classList.add("error-display");
            if (headerState.getSearchString().length !== 0)
                displayDiv.textContent = "No movies found";
        }
        return displayDiv;
    }

})();
