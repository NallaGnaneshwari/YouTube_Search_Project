describe("Body Test", () => {
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

    it("Should Test Body No child nodes", () => {
        body.loadBody();
        
    });

    it("Should Test Body with child nodes", () => {
        body.loadBody();
        // console.log(document.querySelector("#body").childNodes[0].childNodes[0].childNodes[1].textContent);
        const firstDiv = document.querySelector("#body").childNodes[0].childNodes[0].childNodes;
        const actualTitle = firstDiv[1].textContent;
        const expectedTitle = movieData[0].snippet.title;
        expect(actualTitle).toEqual(expectedTitle);
    });

    afterAll(function() {
        bodyState.setResultSet([]);
        updateAllComponents();
    });
});