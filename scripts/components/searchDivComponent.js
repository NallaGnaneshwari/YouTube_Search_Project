//This script is for changes in searchDivComponent  -- Heading, search input, search button  


var searchDivComponent = (function () {

    return {
        createSearchDivComponent: createSearchDivComponent
    }

    function createSearchDivComponent() {
        //Search Div
        let searchDiv = document.createElement("div");  //similar to creating tags in html
        searchDiv.setAttribute("id","search-div")
        searchDiv.classList.add("header-style");

        //Heading
        let headingPara = document.createElement("p");
        let headingData = document.createTextNode("Hey There! Enter your search here..");
        headingPara.classList.add("heading-message")
        headingPara.appendChild(headingData);
        searchDiv.appendChild(headingPara);

        //Search Input
        let searchInput = document.createElement("input");
        searchInput.setAttribute("type", "text");
        searchInput.setAttribute("id", "search-bar")
        searchInput.setAttribute("placeholder", "Enter your input here");
        searchInput.classList.add("form-control-lg");
        searchDiv.appendChild(searchInput)

        //Submit button
        let submitButton = document.createElement("button");
        submitButton.setAttribute("id", "search-button");

        let searchString = document.createTextNode("Search");
        submitButton.appendChild(searchString);

        submitButton.classList.add("btn");
        submitButton.classList.add("btn-primary");
        submitButton.classList.add("btn-lg");
        submitButton.classList.add("search-button")
        searchDiv.appendChild(submitButton);

        //Error Div
        let errorDiv = document.createElement("div");

        //Error Label   --> when no values are entered
        let errorLabel = document.createElement("label");
        errorLabel.classList.add("error-display-black");
        errorLabel.setAttribute("id", "error-label")
        errorLabel.textContent = "";

        errorDiv.appendChild(errorLabel);

        searchDiv.appendChild(errorDiv);

        submitButton.addEventListener("click", () => {
            let searchString = searchInput.value.trim();
            // console.log(searchString);
            if (searchString.length > 0) {  //if search string is not null
                if (searchString !== headerState.getSearchString()) {
                    headerState.setSearchString(searchString);                
                    services.searchApi().then((items) => {
                        bodyState.setResultSet(items);  //appending search api data to the body state 
                        updateAllComponents(); 
                    });
                    descDivComponent.updateShowing();
                    document.getElementById("error-label").textContent = "";
                } 
            } else {   // if search string is null, give error
                bodyState.setResultSet([]);
                updateAllComponents();
                document.querySelector("#error-label").textContent = "*Please Enter Valid Input";
            }
        });

        searchInput.addEventListener("keyup", (event) => {
            if (event.keyCode === 13) {
                submitButton.click();
            }
        });


        // searchApi().then((items) => [
        //     // data.items
        // ])

        return searchDiv;
    }

})();
