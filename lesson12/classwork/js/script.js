// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста
let container = document.createElement("div");
container.classList.add('container');

let postsBlock = document.createElement("div");
postsBlock.classList.add('wrap');
document.body.appendChild(container);
container.appendChild(postsBlock);
let wrapFilterComments = document.createElement("div");
wrapFilterComments.classList.add('user');
container.appendChild(wrapFilterComments);

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts =>{
        for (const post of posts) {
            let postCard = document.createElement("div");
            postCard.classList.add('post');
            postCard.innerHTML = `<h3>ID: ${post.id}</h3>
                                  <h3>UserID: ${post.userId}</h3> 
                                  <h3>Title: ${post.title}</h3> 
                                  <p><strong>Body</strong>: ${post.body}</p>`;
            let btnPost = document.createElement("button");
            btnPost.classList.add('postButton');
            btnPost.innerText = 'All comments >>';
            btnPost.style.background = 'yellowgreen';
            btnPost.style.padding = '5px 10px';
            btnPost.style.borderRadius = '5px';
            btnPost.style.border = '2px solid green';
            postCard.appendChild(btnPost);
            postsBlock.appendChild(postCard);
            btnPost.onmousedown = function (e) {
                e.preventDefault();
                fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
                    .then((response) => response.json())
                    .then((userComment) => {
                        wrapFilterComments.innerHTML = '';
                        let colorComment = `rgb(${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)})`;
                        for (const comment of userComment) {
                            console.log(comment);
                            let commentFilter = document.createElement("div");
                            commentFilter.innerHTML = `
                                                      <h3>PostId: ${comment.postId}</h3> 
                                                      <h3>Id: ${comment.id}</h3> 
                                                      <h3>Name: ${comment.name}</h3> 
                                                      <h3>Email: ${comment.email}</h3> 
                                                      <p><strong>Body</strong>: ${comment.body}</p>`;
                            commentFilter.style.background = colorComment;
                            wrapFilterComments.appendChild(commentFilter);
                        }
                    });
            }
        }
    });

