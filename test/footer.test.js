describe("Footer Test", () => {

    it("Should check the presence of pagination div", () => {
        const firstDiv = document.querySelector("#footer").childNodes[0];
        const expectId = firstDiv.id;
        const actualId = "pagination-div";
        expect(expectId).toEqual(actualId);
    });
});
