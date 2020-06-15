
var header = (function() {

    return {
        loadHeader: loadHeader
    }

    function loadHeader() {
        var headerElement = document.querySelector("#header");
            var searchDiv = searchDivComponent.createSearchDivComponent();
            var descDiv = descDivComponent.createDescDivComponent();
        headerElement.appendChild(searchDiv);
        headerElement.appendChild(descDiv);
    }
})();
