describe("Search Div Component", () => {

    it("Should handle Submit button with new search string", () => {
        headerState.setSearchString("kill");
        document.querySelector("#search-bar").value = "killer";
        spyOn(services, "searchApi").and.returnValue(new Promise(function(resolve,reject){
            return [];
        }));
        const trigger = document.querySelector("#search-button");
        var event = new Event("click");
        trigger.dispatchEvent(event);
        expect(services.searchApi).toHaveBeenCalled();
    });

    it("Should handle Submit button with same search string", () => {
        headerState.setSearchString("kill");
        document.querySelector("#search-bar").value = "kill";
        spyOn(services, "searchApi").and.returnValue(new Promise(function(resolve,reject){
            return [];
        }));
        const trigger = document.querySelector("#search-button");
        var event = new Event("click");
        trigger.dispatchEvent(event);
        expect(services.searchApi).not.toHaveBeenCalled();
    });

    it("Should handle Submit button with empty search string", () => {
        headerState.setSearchString("");
        document.querySelector("#search-bar").value = "";
        spyOn(services, "searchApi").and.returnValue(new Promise(function(resolve,reject){
            return [];
        }));
        const trigger = document.querySelector("#search-button");
        var event = new Event("click");
        trigger.dispatchEvent(event);
        const component = document.querySelector("#error-label");
        const expectedText = "*Please Enter Valid Input";
        const actualText = component.textContent;
        expect(actualText).toEqual(expectedText);
    });

    it("Should handle Enter click", () => {
        headerState.setSearchString("");
        document.querySelector("#search-bar").value = "";
        spyOn(services, "searchApi").and.returnValue(new Promise(function(resolve,reject){
            return [];
        }));
        const trigger = document.querySelector("#search-bar");
        var event = new Event("keyup");
        event.keyCode = 13;
        trigger.dispatchEvent(event);
        const component = document.querySelector("#error-label");
        const expectedText = "*Please Enter Valid Input";
        const actualText = component.textContent;
        expect(actualText).toEqual(expectedText);
    });

});