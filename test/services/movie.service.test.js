// import fetchMock from 'fetch-mock';

describe("Service Test", () => {

    it("Sould Fetch the data Pass", (done) => {
        services.searchApi().then(function(result) {
            const actualvalue = result[0].kind;
            const extpectedValue = "youtube#video";
            expect(actualvalue).toEqual(extpectedValue);
            done();
        })
    });
})