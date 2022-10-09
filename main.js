import {blogPosts} from './app.js';

let blogTitles = blogPosts.map((postTitle) => {
    return postTitle.title
});

let blogListItems = document.getElementById("blogItems");

blogTitles.forEach((item) => {
    let li = document.createElement("li");
    li.innerText = item;
    blogListItems.appendChild(li);
});



// let blogPostsJSON = JSON.stringify(blogPosts);

// console.log(blogPostsJSON);


