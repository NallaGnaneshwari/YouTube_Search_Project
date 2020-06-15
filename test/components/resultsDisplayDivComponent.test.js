describe("Results Display Div Component", () => {

    var movieData = null;
    beforeEach(function() {
        movieData = [
            {
                "kind": "youtube#video",
                "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/aDZYpSPWaY_giXhYtOx2a8ccSPI\"",
                "id": "cn9AwGKZbC0",
                "snippet": {
                 "publishedAt": "2018-07-27T04:22:36.000Z",
                 "channelId": "UCJ-IaDIn7dqUsAjkRhMr8HA",
                 "title": "Faith Evans feat. Stevie J – \"A Minute\" [Official Music Video]",
                 "description": "SUBSCRIBE now to Faith's channel!\n\nPurchase now on iTunes: https://itunes.apple.com/us/album/a-minute-feat-stevie-j-single/1412915292\n\nSTREAM \"A Minute\" NOW on iTunes, Google Music, Amazon, Spotify, Pandora & TIDAL!\n\nStay connected with Faith:\nhttp://www.twitter.com/faithevans\nhttp://www.instagram.com/therealfaithevans\nhttp://www.facebook.com/faithevansofficial\nhttp://www.faithevansmusic.com",
                 "thumbnails": {
                  "default": {
                   "url": "https://i.ytimg.com/vi/cn9AwGKZbC0/default.jpg",
                   "width": 120,
                   "height": 90
                  },
                  "medium": {
                   "url": "https://i.ytimg.com/vi/cn9AwGKZbC0/mqdefault.jpg",
                   "width": 320,
                   "height": 180
                  },
                  "high": {
                   "url": "https://i.ytimg.com/vi/cn9AwGKZbC0/hqdefault.jpg",
                   "width": 480,
                   "height": 360
                  },
                  "standard": {
                   "url": "https://i.ytimg.com/vi/cn9AwGKZbC0/sddefault.jpg",
                   "width": 640,
                   "height": 480
                  },
                  "maxres": {
                   "url": "https://i.ytimg.com/vi/cn9AwGKZbC0/maxresdefault.jpg",
                   "width": 1280,
                   "height": 720
                  }
                 },
                 "channelTitle": "Faith Evans",
                 "tags": [
                  "faith evans",
                  "stevie j",
                  "a minute",
                  "r&b",
                  "soul",
                  "hip hop",
                  "contemporary r&b",
                  "music",
                  "music video",
                  "prolific music group",
                  "danger zone"
                 ],
                 "categoryId": "10",
                 "liveBroadcastContent": "none",
                 "localized": {
                  "title": "Faith Evans feat. Stevie J – \"A Minute\" [Official Music Video]",
                  "description": "SUBSCRIBE now to Faith's channel!\n\nPurchase now on iTunes: https://itunes.apple.com/us/album/a-minute-feat-stevie-j-single/1412915292\n\nSTREAM \"A Minute\" NOW on iTunes, Google Music, Amazon, Spotify, Pandora & TIDAL!\n\nStay connected with Faith:\nhttp://www.twitter.com/faithevans\nhttp://www.instagram.com/therealfaithevans\nhttp://www.facebook.com/faithevansofficial\nhttp://www.faithevansmusic.com"
                 }
                },
                "statistics": {
                 "viewCount": "6178011",
                 "likeCount": "85579",
                 "dislikeCount": "4814",
                 "favoriteCount": "0",
                 "commentCount": "11428"
                }
               },
               {
                "kind": "youtube#video",
                "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/YF2LCrUxcGJ5gM05VQlD66_Y3iQ\"",
                "id": "1jLOOCADTGs",
                "snippet": {
                 "publishedAt": "2016-08-26T15:59:22.000Z",
                 "channelId": "UCq0OueAsdxH6b8nyAspwViw",
                 "title": "A Dog's Purpose - Official Trailer (HD)",
                 "description": "A Dog's Purpose - Official Trailer\nIn Theaters January 27, 2017\nhttp://www.adogspurposemovie.com\n\nBased on the beloved bestselling novel by W. Bruce Cameron, A Dog’s Purpose, from director Lasse Hallström (The Cider House Rules, Dear John, The 100-Foot Journey), shares the soulful and surprising story of one devoted dog (voiced by Josh Gad) who finds the meaning of his own existence through the lives of the humans he teaches to laugh and love.  The family film told from the dog’s perspective also stars Dennis Quaid, Britt Robertson, K.J. Apa, John Ortiz, Juilet Rylance, Luke Kirby, Peggy Lipton and Pooch Hall. \n \nA Dog’s Purpose is produced by Gavin Polone (Zombieland, TV’s Gilmore Girls).  The film from Amblin Entertainment and Walden Media is executive produced by Alan Blomquist and Mark Sourian, and it will be distributed by Universal Pictures.  \nhttp://www.adogspurposemovie.com",
                 "thumbnails": {
                  "default": {
                   "url": "https://i.ytimg.com/vi/1jLOOCADTGs/default.jpg",
                   "width": 120,
                   "height": 90
                  },
                  "medium": {
                   "url": "https://i.ytimg.com/vi/1jLOOCADTGs/mqdefault.jpg",
                   "width": 320,
                   "height": 180
                  },
                  "high": {
                   "url": "https://i.ytimg.com/vi/1jLOOCADTGs/hqdefault.jpg",
                   "width": 480,
                   "height": 360
                  },
                  "standard": {
                   "url": "https://i.ytimg.com/vi/1jLOOCADTGs/sddefault.jpg",
                   "width": 640,
                   "height": 480
                  },
                  "maxres": {
                   "url": "https://i.ytimg.com/vi/1jLOOCADTGs/maxresdefault.jpg",
                   "width": 1280,
                   "height": 720
                  }
                 },
                 "channelTitle": "Universal Pictures",
                 "tags": [
                  "Trailer",
                  "Dog",
                  "Romance",
                  "Pet",
                  "Film",
                  "Comedy",
                  "Dennis Quaid",
                  "Josh Gad",
                  "Lasse Hallström",
                  "W. Bruce Cameron",
                  "HD",
                  "Movie"
                 ],
                 "categoryId": "24",
                 "liveBroadcastContent": "none",
                 "localized": {
                  "title": "A Dog's Purpose - Official Trailer (HD)",
                  "description": "A Dog's Purpose - Official Trailer\nIn Theaters January 27, 2017\nhttp://www.adogspurposemovie.com\n\nBased on the beloved bestselling novel by W. Bruce Cameron, A Dog’s Purpose, from director Lasse Hallström (The Cider House Rules, Dear John, The 100-Foot Journey), shares the soulful and surprising story of one devoted dog (voiced by Josh Gad) who finds the meaning of his own existence through the lives of the humans he teaches to laugh and love.  The family film told from the dog’s perspective also stars Dennis Quaid, Britt Robertson, K.J. Apa, John Ortiz, Juilet Rylance, Luke Kirby, Peggy Lipton and Pooch Hall. \n \nA Dog’s Purpose is produced by Gavin Polone (Zombieland, TV’s Gilmore Girls).  The film from Amblin Entertainment and Walden Media is executive produced by Alan Blomquist and Mark Sourian, and it will be distributed by Universal Pictures.  \nhttp://www.adogspurposemovie.com"
                 }
                },
                "statistics": {
                 "viewCount": "18323599",
                 "likeCount": "134711",
                 "dislikeCount": "14196",
                 "favoriteCount": "0"
                }
               }
        ];
        bodyState.setResultSet(movieData);
        paginationState.setPageNumber(1);
        updateAllComponents();
        
    });

    it("Should create Results  DivComponent with data", () => {
        const component = resultsDisplayDivComponent.createResultsDisplayDivComponent();
        const actualID = component.id;
        const expectedID = "display-div";
        expect(actualID).toEqual(expectedID);
    });

    it("Should create Results  DivComponent without data", () => {
        bodyState.setResultSet([]);
        updateAllComponents();
        const component = resultsDisplayDivComponent.createResultsDisplayDivComponent();
        const actualID = component.id;
        const expectedID = "display-div";
        expect(actualID).toEqual(expectedID);
    });

    // For code coverage
    it("Should handle card click", () => {
        bodyState.setResultSet([...movieData,...movieData,...movieData,...movieData]);
        paginationState.setPageNumber(2);
        updateAllComponents();
        spyOn(resultsDisplayDivComponent, "openNewTab");
        const id= movieData[1].id;
        const trigger = document.getElementById(id);
        console.log(trigger);
        var event = new Event("click");
        trigger.dispatchEvent(event);
        expect(resultsDisplayDivComponent.openNewTab).not.toHaveBeenCalled();
    });

    it("Should create Results  DivComponent without data", () => {
        bodyState.setResultSet([...movieData,...movieData,...movieData,...movieData]);
        paginationState.setPageNumber(2);
        updateAllComponents();
        const component = resultsDisplayDivComponent.createResultsDisplayDivComponent();
        const actualID = component.id;
        const expectedID = "display-div";
        expect(actualID).toEqual(expectedID);
    });

    it("Should create No movies found", () => {
        bodyState.setResultSet([]);
        paginationState.setPageNumber(0);
        headerState.setSearchString("kk");
        updateAllComponents();
        const component = resultsDisplayDivComponent.createResultsDisplayDivComponent();
        const actualMessage = component.textContent;
        const expectedMessage = "No movies found";
        expect(actualMessage).toEqual(expectedMessage);
    });
    

    afterAll(function() {
        bodyState.setResultSet([]);
        paginationState.setPageNumber(0);
        updateAllComponents();
    })
});