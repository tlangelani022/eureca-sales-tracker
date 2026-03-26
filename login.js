let savedUser =
localStorage.getItem("user");

let savedPass =
localStorage.getItem("pass");

if(!savedUser){

localStorage.setItem("user","admin");
localStorage.setItem("pass","1234");

}


function login(){

let u =
document.getElementById("username").value;

let p =
document.getElementById("password").value;

let user =
localStorage.getItem("user");

let pass =
localStorage.getItem("pass");

if(u == user && p == pass){

localStorage.setItem(
"login",
"yes"
);

window.location =
"index.html";

}else{

document.getElementById(
"msg"
).innerText =
"Wrong username or password";

}

}