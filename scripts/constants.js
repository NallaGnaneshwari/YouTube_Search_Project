// This script contains key for the YouTube API


var constants = {
    basicURL :  "https://www.googleapis.com/youtube/v3/search?" +
                "key=AIzaSyCv0hQNH2yPi10L3ATjRkI2WCZJN0R8MV0" +
                "&type=video" +
                "&part=snippet" +
                "&maxResults=50" +
                "&q=" ,
    descURL :   "https://www.googleapis.com/youtube/v3/videos?" +
                "key=AIzaSyCv0hQNH2yPi10L3ATjRkI2WCZJN0R8MV0" +
                "&part=snippet,statistics" +
                "&id="
}


//maxResults = 50 --> atmost 50 results will be fetched
// descURL --> for youtube video description
// basicURL --> for search results