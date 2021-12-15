let params = new URLSearchParams(document.location.search);
let paramsId = params.get("id");
let paramsUser = JSON.parse(params.get('user'));
let userCard = document.createElement("div");
userCard.classList.add('wrap');
document.body.appendChild(userCard);
let infoKey = Object.keys(paramsUser);
for (let i = 0; i < infoKey.length; i++) {
    let blockElement = document.createElement("div");
    blockElement.classList.add(`${infoKey[i]}User`);
    if (typeof paramsUser[infoKey[i]] === "object"){
        blockElement.innerText = infoKey[i] + ':';
        let itemAddressKey = Object.keys(paramsUser[infoKey[i]]);
        for (let j = 0; j < itemAddressKey.length; j++) {
            let KeyElement = itemAddressKey[j];
            KeyElement = document.createElement("div");
            KeyElement.classList.add(`${itemAddressKey[j]}User`);
            let addressUser = infoKey[i];
            let addressItems =itemAddressKey[j];
            let geoLocationsObj = paramsUser[addressUser][addressItems];
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
                KeyElement.innerText = itemAddressKey[j] + " : " + paramsUser[addressUser][addressItems];
            }
            blockElement.append(KeyElement);
        }
    }else {blockElement.innerText = infoKey[i] + " : " + paramsUser[infoKey[i]];}
    userCard.append(blockElement);
}
let postBtn = document.createElement("button");
postBtn.innerText = 'post of current user >>';
postBtn.classList.add('post_of_current_user');
document.body.appendChild(postBtn);
postBtn.addEventListener('mousedown', function (event) {
    event.preventDefault();
    fetch(`https://jsonplaceholder.typicode.com/users/${paramsId}/posts`)
        .then(response =>response.json())
        .then(posts => {
             let postList = document.createElement("ol");
            document.body.appendChild(postList);
            for (const post of posts) {
                let postTitle = document.createElement("li");
                postTitle.classList.add('postLi');
                postTitle.innerHTML = `<h4>${post.title}</h4>`;
                postList.appendChild(postTitle);
                let btnBlock = document.createElement("div");
                let liBtn = document.createElement("button");
                liBtn.classList.add('post_detail_btn');
                liBtn.id = `postID${post.id}`;
                liBtn.innerText = 'Post detail >>';
                postTitle.appendChild(btnBlock);
                btnBlock.appendChild(liBtn);
                liBtn.addEventListener('mousedown', function (event) {
                    event.preventDefault();
                    window.open(`post_details.html?postId=${post.id}`,'_blank');
                });
            }
            postBtn.disabled = true;
        });
});
