//footer 
var footer = (function () {

    return {
        loadFooter: loadFooter
    }

    function loadFooter() {
        let footerElement = document.querySelector("#footer");
        footerElement.classList.add("footer-style")

        let paginationDiv = paginationDivComponent.createPaginationDivComponent();

        footerElement.appendChild(paginationDiv);
    }

})();
