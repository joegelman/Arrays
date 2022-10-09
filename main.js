// const blogPosts = [
//     {
//         number: 1,
//         title: "Why Learning HTML, CSS and JavaScript Will Make You a Better Writer",
//         description: null,
//         tags: ["web copy", "tips and tricks", "content", "thought leadership"],
//         date: null,
//         featured: true,
//     },
//     {
//         number: 2,
//         title: "How the Lost Art of Rhetoric Makes for More Powerful, Punchy Web Copy",
//         description: null,
//         tags: ["web copy", "tips and tricks"],
//         date: null,
//         featured: false,
//     },
//     {
//         number: 3,
//         title: "17 Proven Headline Patterns That Make People Click Buy and Say Yes",
//         description: null,
//         tags: ["web copy", "tips and tricks", "conversion"],
//         date: null,
//         featured: false,
//     },
//     {
//         number: 4,
//         title: "Win Hearts and Minds with These 5 Secrets from the Classic “Influence”",
//         description: null,
//         tags: ["tips and tricks", "book reviews", "conversion"],
//         date: null,
//         featured: false,
//     },
//     {
//         number: 5,
//         title: "5 Reasons Why David Ogilvy Thought Every Writer Should Read This One Little Book",
//         description: null,
//         tags: ["web copy", "book reviews"],
//         date: null,
//         featured: false,
//     },
//     {
//         number: 6,
//         title: "Brilliant Secrets That Make the $500 Copy Bible Worth It",
//         description: null,
//         tags: ["web copy", "tips and tricks", "book reviews"],
//         date: null,
//         featured: false,
//     },
//     {
//         number: 7,
//         title: "How to Write Thought Leadership That People Actually Want to Follow",
//         description: null,
//         tags: ["content", "thought leadership"],
//         date: null,
//         featured: false,
//     },
//     {
//         number: 8,
//         title: "6 Free Writing Tools You Should Bookmark Right Now",
//         description: null,
//         tags: ["web copy", "tips and tricks"],
//         date: null,
//         featured: false,
//     },
//     {
//         number: 9,
//         title: "Try Using Only These 1,000 Words to Help Make Your Writing Better",
//         description: null,
//         tags: ["web copy", "tips and tricks"],
//         date: null,
//         featured: false,
//     },
//     {
//         number: 10,
//         title: "The Top 11 Category Names of All Time (and What Makes Them so Powerful)",
//         description: null,
//         tags: ["thought leadership", "product marketing"],
//         date: null,
//         featured: false,
//     }
// ];  



// let newPost = {
//     number: 11,
//     title: "Whitepapers, eBooks, One-Pagers... What's the Difference, and How to Nail Each",
//     description: null,
//     tags: ["thought leadership", "product marketing"],
//     date: null,
//     featured: false,
// };

// blogPosts.push(newPost);

// console.log(blogPosts);

import {blogPosts} from './app.js';

let blogTitles = blogPosts.map((postTitle) => {
    return postTitle.title
});





// console.log(blogTitles);


let blogListItems = document.getElementById("blogItems");



blogTitles.forEach((item) => {
    let li = document.createElement("li");
    li.innerText = item;
    blogListItems.appendChild(li);
});



// let blogPostsJSON = JSON.stringify(blogPosts);

// console.log(blogPostsJSON);


