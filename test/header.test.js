describe("Header Test", () => {

    // beforeEach(function() {
    //     header.loadHeader();
    // });

    it("Should check the presence of search div", () => {
        const firstDiv = document.querySelector("#header").childNodes[0];
        const expectId = firstDiv.id;
        const actualId = "search-div";
        expect(expectId).toEqual(actualId);
    });

    it("Should check the presence of desc div", () => {
        const secondDiv = document.querySelector("#header").childNodes[1];
        const expectId = secondDiv.id;
        const actualId = "desc-div";
        expect(expectId).toEqual(actualId);
    });

    // afterAll(function() {
    //     document.querySelector("#header").remove();
    //     var hEle = document.createElement('div');
    //     hEle.setAttribute('id', 'header');
    //     document.body.appendChild(hEle);
    //     header.loadHeader();
    // });

});