const usernameInput = document.querySelector('#username');
const titleInput = document.querySelector('#title');
const commentInput = document.querySelector('#comment');
const submitButtonInput = document.querySelector('#submit');


// Redirection on submit to post.html

// window.location.href = "./assets/post.html"

// Function that saves and stores the user input locally
submitButton.addEventListener('click', function (event) {
    event.preventDefault();

    //create post object
    const user = {
        username: usernameInput.value,
        title: titleInput.value,
        comment: commentInput.value, 
        
    };
    console.log('kill me');
    localStorage.setItem('user', JSON.stringify(user));


    //Changes webpages
    window.location.href = "./assets/post.html"


});


// Function that renders the data on screen
function renderCommentData() {

    const newComment = JSON.parse(localStorage.getItem('user'));

    if (user !== null) {
        document.getElementById()
    }
}




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

themeSwitcher.addEventListener('click', function() {

});


//testing
// $("#button").click(function() {
//     location.replace("/page2.html");
// });

//Thing that saves posts into 







