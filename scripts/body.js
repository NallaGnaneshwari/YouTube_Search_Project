var body = (function() {

    return {
      loadBody : loadBody,
    }

    function loadBody() {

      let bodyElement = document.querySelector("#body");
      cleanBody(bodyElement);
      
      //Display Div
      let displayDiv = resultsDisplayDivComponent.createResultsDisplayDivComponent();
    
      bodyElement.appendChild(displayDiv);
    }

    function cleanBody(bodyElement) {   //clears the previous body element when you search for new one
      if (bodyElement.hasChildNodes()) {
        bodyElement.removeChild(bodyElement.firstChild);
      }
    }

})();

