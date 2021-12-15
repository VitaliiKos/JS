let params = new URLSearchParams(document.location.search);
let paramsPostId = params.get("postId");

fetch(`https://jsonplaceholder.typicode.com/posts/${paramsPostId}`)
    .then((response) => response.json())
    .then((userPost) => {
            let postBlock = document.createElement("div");
            postBlock.classList.add('postCard');
            let keysList = Object.keys(userPost);
            let postUl = document.createElement("ul");
            postUl.classList.add('post_ul');
            for (const PostKey of keysList) {
                let postLi = document.createElement("li");
                postLi.classList.add('post_li');
                postLi.innerHTML = `<h4>${PostKey}: <em>${userPost[PostKey]}</em></h4`;
                postUl.appendChild(postLi);
        }
        document.body.prepend(postBlock);
        postBlock.appendChild(postUl);
    });
fetch(`https:jsonplaceholder.typicode.com/posts/${paramsPostId}/comments`)
    .then(response => response.json())
    .then(comments =>{
        let commentsBlock = document.createElement("div");
        commentsBlock.classList.add('comments_block');
        document.body.appendChild(commentsBlock);
        for (const comment of comments) {
            let commentCard = document.createElement("div");
            commentCard.classList.add('comment_card');
            commentsBlock.appendChild(commentCard);
            let cardUl = document.createElement("ul");
            cardUl.classList.add('card_ul');
            commentCard.appendChild(cardUl);
            for (const commentKey in comment) {
                let commentLi = document.createElement("li");
                commentLi.classList.add('card_li');
                commentLi.innerHTML = `<h4>${commentKey}: <em>${comment[commentKey]}</em></h4>`;
                cardUl.appendChild(commentLi);
            }
        }
    });