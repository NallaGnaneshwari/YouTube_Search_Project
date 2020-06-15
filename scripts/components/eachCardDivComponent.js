//This script is for changes in eachCardDivComponent --> thumbnails, likes, view count, comments



let eachCardDivComponent = (function () {

    return {
        createEachCardDivComponent: createEachCardDivComponent
    }

    function createEachCardDivComponent(snippet, id, stats) {
        let itemDiv = document.createElement("div");
        // console.log(id);
        itemDiv.setAttribute("id", id);
        itemDiv.classList.add("card");
        itemDiv.classList.add("each-item");

        //Thumbnail
        let thumbnail = document.createElement("img");
        thumbnail.setAttribute("src", snippet.thumbnails.medium.url);
        thumbnail.setAttribute("alt", "Loading");

        //Title
        let title = document.createElement("a");
        title.classList.add("block-style");
        title.classList.add("card-title");
        // title.setAttribute("href","https://www.youtube.com/watch?v=" + id);
        // title.setAttribute("target","_blank");
        title.textContent = snippet.title;

        //Channel
        let channel = document.createElement("label");
        channel.classList.add("block-style");
        channel.classList.add("card-channel");
        channel.textContent = snippet.channelTitle;

        //Desc
        let description = document.createElement("label");
        description.classList.add("block-style");
        description.classList.add("card-description");
        description.textContent = snippet.description.substring(0, 100) + "...";

        //View Count
        let viewCount = document.createElement("label");
        viewCount.classList.add("card-description");
        viewCount.classList.add("block-style");
        viewCount.innerHTML = "<b>Views: </b>" + (stats.viewCount | 0);

        //Likes Count
        let likesCount = document.createElement("label");
        likesCount.classList.add("card-description");
        likesCount.classList.add("block-style");
        likesCount.innerHTML = "<b>Likes: </b>" + (stats.likeCount | 0);

        //Comments Count
        let commentsCount = document.createElement("label");
        commentsCount.classList.add("card-description");
        commentsCount.classList.add("block-style");
        commentsCount.innerHTML = "<b>Comments: </b>" + (stats.commentCount | 0);

        itemDiv.appendChild(thumbnail);
        itemDiv.appendChild(title);
        itemDiv.appendChild(channel);
        itemDiv.appendChild(description);
        itemDiv.appendChild(viewCount);
        itemDiv.appendChild(likesCount);
        itemDiv.appendChild(commentsCount);

        return itemDiv;
    }
})();
