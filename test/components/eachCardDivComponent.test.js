describe("Each Card Div Component", () => {
    var movieData = null, component = null;
    beforeEach(function() {
        movieData = [
            {
                "kind": "youtube#searchResult",
                "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/3WeI7U7eK47iTqR3xYc8Kto47nA\"",
                "id": "7QkCrmq3LYc",
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
                "id": "nq4aU9gmZQk",
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
        const {snippet, id, statistics} = movieData[0];
        component = eachCardDivComponent.createEachCardDivComponent(snippet,id,statistics);
    });

    it("Should create EachCard DivComponent", () => {
        const {id} = movieData[0];
        const actualID = component.id;
        const expectedID = id;
        expect(actualID).toEqual(expectedID);
    });

    it("Should have 7 child elements in Each card div component", () => {
        const actualCount = component.childElementCount;
        const expectedCount = 7;
        expect(actualCount).toEqual(expectedCount);
    });

    afterAll(function() {
        
    });

});