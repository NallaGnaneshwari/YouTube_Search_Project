describe("Index Test", () => {
    it("Should Handle Left arrow click", () => {
        const trigger = document;
        var event = new Event("keyup");
        event.keyCode = 37;
        trigger.dispatchEvent(event);
    });

    it("Should Handle Right arrow click", () => {
        const trigger = document;
        var event = new Event("keyup");
        event.keyCode = 39;
        trigger.dispatchEvent(event);
    });
})