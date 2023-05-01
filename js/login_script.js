let currentURL = window.location.href;
let urlSearch = new URL(currentURL);
let user_name = urlSearch.searchParams.get("username");
let user_password = urlSearch.searchParams.get("password");
document.getElementById("username").value = user_name;
document.getElementById("password").value = user_password;

// console.log(user_password);

// function userLogin(){
//     let user_name = document.getElementById("username").value;
//     let user_password = document.getElementById("password").value;
//     console.log(user_name, user_password);
// }

