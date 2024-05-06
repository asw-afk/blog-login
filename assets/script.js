const usernameInput = document.querySelector('#username');
const titleInput = document.querySelector('#title');
const commentInput = document.querySelector('#comment');

const commentCountSpan = document.querySelector('#threadCount');

const submitButtonInput = document.querySelector('#submitButton');
const backButtonInput = document.querySelector('#back');

const user = []; 


//renderCommentData();
console.log("ffF");

function renderTodos() {

    const storedUser = JSON.parse(localStorage.getItem("user"));
    //commentCountSpan.commentInput = '';
    commentCountSpan.textContent = user.length;

   
   
    for (let i = 0; i <user.length; i++) {
        const user = storedUser[i];
        
        const li = document.createElement('li');
        li.textContent = user;
        li.setAttribute('data-index', i);

        //const button = document.createElement('button');

        li.appendChild(button);
        commentCountSpan.appendChild(li);
    }
    console.log(user.length);
}

function init() {

    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser !== null) {
        user = storedUser; 
    }
        //calls the renderTodos function
        renderTodos();
    
}

function storeTodos() {
    localStorage.setItem('user', JSON.stringify(user))
}

//add submit event to form
todoForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const todoText = todoInput;

    if (todoText === '') {
        return;
    }

    user.push(todoText);
    todoInput.value = '';

    storeTodos();
    renderTodos();

});

// Redirection on submit to post.html

// window.location.href = "./assets/post.html"

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


    //const userArray = Object.values(user);
    //console.log(userArray.count);

    localStorage.setItem('user', JSON.stringify(user));

    // Changes webpage to post.html
    ///window.location.href = "./assets/post.html"
    console.log('dont kill me');

    console.log(commentCountSpan);
};


// function renderUser() {
//    JSON.parse(localStorage.getItem("user"));
//     console.log('krill');

//     commentCountSpan.textContent = ("user");
//     //commentCountSpan.textContent = 
// };












init();

// todoForm.addEventListener('submit', function (event) {
//     // event.preventDefault();

//     const todoText = todoInput.value;

//     if (todoText === '') {

//     }

//     todoInput.value = '';

// storeTodos();
// renderTodos();

// });



// function init () {
//     const storedTodos = JSON.parse(localStorage.getItem('user'));

//     if (storedTodos !== null) {
//         users = storedTodos;
//     }

//     renderTodos();

// }



submitButton.addEventListener('click', function (event) {
    event.preventDefault();
    saveUser();
    renderTodos();
    console.log("ff");
});






//console.log(user.count);


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







