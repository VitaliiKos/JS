// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts
let task1 = document.createElement("h2");
task1.innerText =  'Завдання 1';
document.body.appendChild(task1);

let postsBlock = document.createElement("div");
postsBlock.classList.add('wrap');
document.body.appendChild(postsBlock);

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
            postsBlock.appendChild(postCard);
        }
    })

// 2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments
let task2 = document.createElement("h2");
task2.innerText =  'Завдання 2';
document.body.appendChild(task2);


let commentsBlock = document.createElement("div");
commentsBlock.classList.add('wrap2');
document.body.appendChild(commentsBlock);

fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(commetnts =>{

        for (const comment of commetnts) {
            console.log(comment);
            let commentCard = document.createElement("div");
            commentCard.classList.add('comment');
            commentCard.innerHTML = `<h3>ID: ${comment.id}</h3>
                                  <h3>PostID: ${comment.postId}</h3> 
                                  <h3>Name: ${comment.name}</h3> 
                                  <h3>email: ${comment.email}</h3> 
                                  <p><strong>Body</strong>: ${comment.body}</p>`;
            commentsBlock.appendChild(commentCard);
        }
    });