// Entire data management (data flow between different components) is taken care by State.

var headerState = (function () {
    var searchString = "";

    return {  // this list is basically what all a function can return.
        setSearchString: setSearchString,
        getSearchString: getSearchString
    }

    function setSearchString(string) {
        searchString = string;
    }

    function getSearchString() {
        return searchString;
    }
})();

var bodyState = (function () {
    
    var resultSet = [];

    return {
        setResultSet: setResultSet,
        getResultSet: getResultSet,
        getResultSetLength: getResultSetLength
    }

    function setResultSet(results) {
        resultSet = results;
    }

    function getResultSet() {
        return resultSet;
    }

    function getResultSetLength() {
        return resultSet.length;
    }

})();

var paginationState = (function () {
    var itemsPerPage = 4;
    var pageNumber = 1;

    return {
        setPageNumber: setPageNumber,
        getPageNumber: getPageNumber,
        incrementPageNumber: incrementPageNumber,
        decrementPageNumber: decrementPageNumber,
        setPageNumberToFirst: setPageNumberToFirst,
        setPageNumberToLast: setPageNumberToLast,
        refreshPageNumber: refreshPageNumber,
        getItemsPerPage: getItemsPerPage,
        setItemsPerPage: setItemsPerPage
    }

    function setPageNumber(pgno) {
        var pgnoElement = document.getElementById("pageNumber");
        pgnoElement.value = pgno;
        pageNumber = pgno;
    }

    function getPageNumber() {
        return pageNumber;
    }

    function incrementPageNumber() {
        this.setPageNumber(parseInt(this.getPageNumber()) + 1);
    }

    function decrementPageNumber() {
        this.setPageNumber(this.getPageNumber() - 1);
    }

    function setPageNumberToFirst() {
        let pgno = 1;
        if (bodyState.getResultSetLength() === 0) {
            pgno = 0;
        }
        this.setPageNumber(pgno);
    }

    function setPageNumberToLast() {
        this.setPageNumber(Math.ceil(bodyState.getResultSetLength() / itemsPerPage));
    }

    function refreshPageNumber() {
        let presentPageNumber = pageNumber;
        let newPageNumber = 1;
        let upperLimit = Math.ceil(bodyState.getResultSetLength() / itemsPerPage);
        if (presentPageNumber <= 0) {
            newPageNumber = 1;
        } else if (presentPageNumber > upperLimit) {
            newPageNumber = upperLimit;
        }

        this.setPageNumber(newPageNumber)
    }

    function getItemsPerPage() {
        return itemsPerPage;
    }

    function setItemsPerPage(items) {
        itemsPerPage = items;
    }

})();
