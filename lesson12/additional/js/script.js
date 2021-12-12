// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста

let container = document.createElement("div");
container.classList.add('container');
let postsBlock = document.createElement("div");
postsBlock.classList.add('wrapPost');
document.body.appendChild(container);
let wrapFilterComments = document.createElement("div");
wrapFilterComments.classList.add('userComment');
let userList = document.createElement("div");
userList.classList.add('userList');

fetch('https://jsonplaceholder.typicode.com/users')
    .then(user=> user.json())
    .then(users =>{
            for (const user of users) {
                let userBtn = document.createElement("button");
                userBtn.innerText = 'All posts >>>';
                userBtn.classList.add('user_btn');
                let userInfo = document.createElement("div");
                userInfo.classList.add('userInfo');
                container.appendChild(userList);
                userList.appendChild(userInfo);
                let itemKey = Object.keys(user);
                for (let i = 0; i < itemKey.length; i++) {
                    let itemKeyElement = itemKey[i];
                    itemKeyElement = document.createElement("div");
                    itemKeyElement.classList.add(`${itemKey[i]}User`);
                    if (typeof user[itemKey[i]] === 'object'){
                        itemKeyElement.innerText = itemKey[i] + " : ";
                        let itemAddressKey = Object.keys(user[itemKey[i]]);
                        for (let j = 0; j < itemAddressKey.length; j++) {
                            let KeyElement = itemAddressKey[j];
                            KeyElement = document.createElement("div");
                            KeyElement.classList.add(`${itemAddressKey[j]}User`);
                            let addressUser = itemKey[i];
                            let addressItems =itemAddressKey[j];
                            let geoLocationsObj = user[addressUser][addressItems];
                            if (typeof geoLocationsObj === "object"){
                                KeyElement.innerText = itemAddressKey[j] + ' : ';
                                for (const geo in geoLocationsObj) {
                                    let local = document.createElement('div');
                                    local.classList.add(`${geo}User`);
                                    local.innerText = geo + ' : ' + geoLocationsObj[geo];
                                    KeyElement.append(local);
                                }
                            }else{
                                KeyElement.innerText = itemAddressKey[j] + ' : ' + itemAddressKey[j];
                                KeyElement.innerText = itemAddressKey[j] + " : " + user[addressUser][addressItems];
                            }
                            itemKeyElement.append(KeyElement);
                        }
                    }else {itemKeyElement.innerText = itemKey[i] + " : " + user[itemKey[i]];}
                    userInfo.append(itemKeyElement);
                }
                userInfo.appendChild(userBtn);
                userBtn.addEventListener('mousedown', function (event) {
                    event.preventDefault();
                    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
                        .then((response) => response.json())
                        .then(posts =>{
                            postsBlock.innerHTML = '';
                            for (const post of posts) {
                                let postCard = document.createElement("div");
                                postCard.classList.add('post');
                                postCard.innerHTML = `<h3>ID: ${post.id}</h3>;
                                  <h3>UserID: ${post.userId}</h3> ;
                                  <h3>Title: ${post.title}</h3> ;
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
                                container.append(postsBlock,wrapFilterComments);
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
                })
            }
    })