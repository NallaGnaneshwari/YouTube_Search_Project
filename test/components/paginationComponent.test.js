describe("Pagination Div Component", () => {

    beforeAll(function() {
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
    // beforeEach(function() {
    // });

    it("Should create Pagination DivComponent", () => {
        const component = paginationDivComponent.createPaginationDivComponent();
        const actualID = component.id;
        const expectedID = "pagination-div";
        expect(actualID).toEqual(expectedID);
    });

    it("Should check number of children on pagination DivComponent", () => {
        const component = paginationDivComponent.createPaginationDivComponent();
        const actualCount = component.childElementCount;
        const expectedCount = 6;
        expect(actualCount).toEqual(expectedCount);
    });

    it("Should handle decrement page number", () => {
        spyOn(paginationState, "decrementPageNumber");
        const trigger = document.body.querySelector("#previousPage");
        var event = new Event("click");
        trigger.dispatchEvent(event);
        expect(paginationState.decrementPageNumber).toHaveBeenCalled();
    });

    it("Should handle increment page number", () => {
        spyOn(paginationState, "incrementPageNumber");
        const trigger = document.body.querySelector("#nextPage");
        var event = new Event("click");
        trigger.dispatchEvent(event);
        expect(paginationState.incrementPageNumber).toHaveBeenCalled();
    });

    it("Should handle first page number", () => {
        spyOn(paginationState, "setPageNumberToFirst");
        const trigger = document.body.querySelector("#firstPage");
        var event = new Event("click");
        trigger.dispatchEvent(event);
        expect(paginationState.setPageNumberToFirst).toHaveBeenCalled();
    });

    it("Should handle last page number", () => {
        spyOn(paginationState, "setPageNumberToLast");
        const trigger = document.body.querySelector("#lastPage");
        var event = new Event("click");
        trigger.dispatchEvent(event);
        expect(paginationState.setPageNumberToLast).toHaveBeenCalled();
    });

    it("Should handle last page number", () => {
        spyOn(paginationState, "setPageNumber");
        const trigger = document.body.querySelector("#pageNumber");
        var event = new Event("change");
        trigger.dispatchEvent(event);
        expect(paginationState.setPageNumber).toHaveBeenCalled();
    });

    afterAll(function() {
        bodyState.setResultSet([]);
        updateAllComponents();
    })
});