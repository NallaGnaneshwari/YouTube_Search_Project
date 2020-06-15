describe("States Test", () => {
    describe("Header State", () => {
        it("Should set search String", () => {
            const searchString = "abcd";
            headerState.setSearchString(searchString);
            expect(headerState.getSearchString()).toEqual(searchString);
        });
    });

    describe("Body State", () => {
        let movieData = null;
        beforeEach(function () {
            movieData = [{
                    id: 1
                },
                {
                    id: 2
                }
            ];
        });

        it("Should set result set", () => {
            bodyState.setResultSet(movieData);
            expect(bodyState.getResultSet()).toEqual(movieData);
        });

        it("Should get result set length", () => {
            bodyState.setResultSet(movieData);
            expect(bodyState.getResultSetLength()).toEqual(movieData.length);
        });

        afterAll(function() {
            bodyState.setResultSet([]);
        });
    });

    describe("Pagnation State", () => {
        let itemsPerPage, pageNumber;
        let movieData = [{
                id: 1
            },
            {
                id: 2
            }
        ];;
        beforeEach(function () {
            itemsPerPage = 4;
            pageNumber = 2;
        });

        it("Should set page number", () => {
            paginationState.setPageNumber(pageNumber);
            expect(paginationState.getPageNumber()).toEqual(pageNumber);
        });

        it("Should set items per page", () => {
            paginationState.setItemsPerPage(itemsPerPage);
            expect(paginationState.getItemsPerPage()).toEqual(itemsPerPage);
        });

        it("Should increment page number", () => {
            paginationState.setPageNumber(pageNumber);
            paginationState.incrementPageNumber();
            expect(paginationState.getPageNumber()).toEqual(pageNumber + 1);
        });

        it("Should decrement page number", () => {
            paginationState.setPageNumber(pageNumber);
            paginationState.decrementPageNumber();
            expect(paginationState.getPageNumber()).toEqual(pageNumber - 1);
        });

        it("Should set page number to first Result set not empty", () => {
            bodyState.setResultSet(movieData);
            paginationState.setPageNumberToFirst();
            expect(paginationState.getPageNumber()).toEqual(1);
        });

        it("Should set page number to first Result set empty", () => {
            bodyState.setResultSet([]);
            paginationState.setPageNumberToFirst();
            expect(paginationState.getPageNumber()).toEqual(0);
        });

        it("Should set page number to last Result set not empty", () => {
            bodyState.setResultSet(movieData);
            paginationState.setPageNumberToLast();
            expect(paginationState.getPageNumber()).toEqual(1);
        });

        it("Should reset page number to 1 smaller value", () => {
            bodyState.setResultSet(movieData);
            paginationState.setPageNumber(-1);
            paginationState.refreshPageNumber();
            expect(paginationState.getPageNumber()).toEqual(1);
        });

        it("Should reset page number to 1 similar value", () => {
            bodyState.setResultSet(movieData);
            paginationState.setPageNumber(1);
            paginationState.refreshPageNumber();
            expect(paginationState.getPageNumber()).toEqual(1);
        });

        it("Should reset page number to Last greater value", () => {
            bodyState.setResultSet(movieData);
            paginationState.setPageNumber(10);
            paginationState.refreshPageNumber();
            expect(paginationState.getPageNumber()).toEqual(1);
        });

        afterAll(function() {
            bodyState.setResultSet([]);
        });
    });

});

// it('should add header', () => {

//     // arrange
// var header = document.createElement('div');
// header.setAttribute('id', 'header');
// document.body.appendChild(header);

//     // call your method

//     // verify the output

// });