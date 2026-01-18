fetch("https://jsonplaceholder.typicode.com/posts")
.then(response=>response.json())
.then(posts=>{displayPosts(posts)})
.catch(error=>{console.error("error displaying :",error)});

function displayPosts(posts){
   const ul= document.getElementById('post-list')
posts.forEach(post=>{
    const listItem = document.createElement('li');
const headerItem = document.createElement('h1');
const paragraph = document.createElement('p');
headerItem.textContent = post.title;
paragraph.textContent = post.body;
listItem.appendChild(headerItem);
listItem.appendChild(paragraph);
ul.appendChild(listItem);

})
}