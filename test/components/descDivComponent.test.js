describe("Description Div Component", () => {

    var movieData = null;
    beforeEach(function() {
        movieData = [
            {
                "kind": "youtube#searchResult",
                "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/3WeI7U7eK47iTqR3xYc8Kto47nA\"",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "7QkCrmq3LYc"
                },
                "snippet": {
                    "publishedAt": "2007-02-06T03:50:56.000Z",
                    "channelId": "UCfLe7A62rH2X7VE82JI-IBA",
                    "title": "JS ft. R Kelly - Love Angel",
                    "description": "Love Angel music video taken from the Ice Cream album.",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/7QkCrmq3LYc/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/7QkCrmq3LYc/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/7QkCrmq3LYc/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "askmeifimalemon",
                    "liveBroadcastContent": "none"
                },
                statistics : {
                    "viewCount" : 10,
                    "likeCount" : 10,
                    "commentCount" : 10
                }
            },
            {
                "kind": "youtube#searchResult",
                "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/LV7lc8UOzT_LM7_Hxme9ODeYUuM\"",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "nq4aU9gmZQk"
                },
                "snippet": {
                    "publishedAt": "2006-05-12T09:38:06.000Z",
                    "channelId": "UC2fOqusTik8eOoPq2XAA9mg",
                    "title": "JS- Ice Cream",
                    "description": "JS- Ice Cream.",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/nq4aU9gmZQk/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/nq4aU9gmZQk/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/nq4aU9gmZQk/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "teineAU",
                    "liveBroadcastContent": "none"
                },
                statistics : {
                    "viewCount" : 10,
                    "likeCount" : 10,
                    "commentCount" : 10
                }
            }
        ];
        bodyState.setResultSet(movieData);
        updateAllComponents();
    });

    it("Should create DescDivComponent", () => {
        const component = descDivComponent.createDescDivComponent();
        const actualID = component.id;
        const expectedID = "desc-div";
        expect(actualID).toEqual(expectedID);
    });

    it("Should check number of children on descDivComponent", () => {
        const component = descDivComponent.createDescDivComponent();
        const actualCount = component.childElementCount;
        const expectedCount = 2;
        expect(actualCount).toEqual(expectedCount);
    });

    it("Should update current showing component with data", () => {
        paginationState.setPageNumber(1);
        descDivComponent.updateShowing();
        const component = document.querySelector("#showing");
        const actualShowing = component.textContent;
        const expectedShowing = "Showing : ( 1 - 2 )";
        expect(actualShowing).toEqual(expectedShowing);
    });

    it("Should update current showing component without data", () => {
        bodyState.setResultSet([]);
        descDivComponent.updateShowing();
        const component = document.querySelector("#showing");
        const actualShowing = component.textContent;
        const expectedShowing = "";
        expect(actualShowing).toEqual(expectedShowing);
    });

    it("Should update current total items component with data", () => {
        headerState.setSearchString("kill");
        descDivComponent.updateTotalItems();
        const component = document.querySelector("#totalItems");
        const actualShowing = component.textContent;
        const expectedShowing = "Found 2 item(s).";
        expect(actualShowing).toEqual(expectedShowing);
    });

    it("Should update current total items component without data", () => {
        headerState.setSearchString("kill");
        bodyState.setResultSet([]);
        descDivComponent.updateTotalItems();
        const component = document.querySelector("#totalItems");
        const actualShowing = component.textContent;
        const expectedShowing = "Found 0 item(s).";
        expect(actualShowing).toEqual(expectedShowing);
    });

    it("No search string specified", () => {
        headerState.setSearchString("");
        bodyState.setResultSet([]);
        descDivComponent.updateTotalItems();
        const component = document.querySelector("#totalItems");
        const actualShowing = component.textContent;
        const expectedShowing = "";
        expect(actualShowing).toEqual(expectedShowing);
    });

    afterAll(function() {
        bodyState.setResultSet([]);
        headerState.setSearchString("");
        updateAllComponents();
    })
});