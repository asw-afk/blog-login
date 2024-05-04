const usernameInput = document.querySelector('#username');
const titleInput = document.querySelector('#title');
const commentInput = document.querySelector('#comment');

const commentCountSpan = document.querySelector('#thread-count');

const submitButtonInput = document.querySelector('#submitButton');
const backButtonInput = document.querySelector('#back');

let user = [];

// const thread = []; 


// Function that renders the data on screen
// function renderCommentData() {

//     // const lastPost = JSON.parse(localStorage.getItem('user'));

//     commentCountSpan.textContent = thread.length;


//     for( let i = 0; i < thread.length; i++) {
//         const ff = thread[i];

//         const li = document.createElement('li');
//         li.textContent = ff;
//         li.setAttribute('data-index', i);

//         li.appendChild(button);
//         commentCountSpan.appendChild(li);

//         // const button = document.createElement('button');
//         // button.textContent = 'compeltefsefs';
//     }


//    // if(lastPost !== null) {
//    //     document.getElementById('title-id').innerHTML = lastPost.title;
//    //     document.getElementById('comment-id').innerHTML = lastPost.comment;
//    //     document.getElementById('username-id').innerHTML = lastPost.username;
//    // };

//    // if (user !== null) {
//    //     document.getElementById(user)
//    // }
// }


//renderCommentData();
console.log("ffF");


// Redirection on submit to post.html

// window.location.href = "./assets/post.html"

submitButton.addEventListener('click', function (event) {
    event.preventDefault();
    saveUser();
    //renderCommentData();
    console.log("ff");
});

// Function that saves and stores the user input locally
// submitButton.addEventListener('click', function (event) {

function saveUser() {
    //create post object
    let user = {
        username: usernameInput.value,
        title: titleInput.value,
        comment: commentInput.value,

    };
    console.log('kill me');
    localStorage.setItem('user', JSON.stringify(user));

    // Changes webpage to post.html
    //window.location.href = "./assets/post.html"
    console.log('dont kill me');
};

function renderUser() {
    localStorage.getItem('user', JSON.parse(user));
}





// function init () {
//     renderCommentData();
// }

// init();















// Access toggle switch HTML element 
const themeSwitcher = document.querySelector('#theme-switcher');
const container = document.querySelector('.container');

// Set default mode to dark
let mode = 'dark';

// Listen for a click event on toggle switch
themeSwitcher.addEventListener('click', function () {
    // If mode is dark, apply light background
    if (mode === 'dark') {
        mode = 'light';
        container.setAttribute('class', 'light');
    }
    // If mode is light, apply dark background
    else {
        mode = 'dark';
        container.setAttribute('class', 'dark');
    }
});

themeSwitcher.addEventListener('click', function () {

});


//testing
// $("#button").click(function() {
//     location.replace("/page2.html");
// });

//Thing that saves posts into 







