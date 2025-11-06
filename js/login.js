console.log("Login Page!");

var userFound = localStorage.getItem("userFound")
if(userFound === "true"){
    window.location.href = "index.html"
}


function userLogin(event){
    event.preventDefault();
    var userEmail = document.getElementById("email").value.trim();
    var userPassword = document.getElementById("password").value.trim();
    var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if(userEmail === "" || userPassword === ""){
        alert("Please Enter Email + Password For Login!");
    }else if(!regex.test(userEmail)){
        alert("Please Enter Email With Correct Syntax\nFor Example: name@domain.com")
    }else if(userEmail !== localStorage.getItem("userEmail") || userPassword !== localStorage.getItem("userPassword")){
        alert("Please Enter Correct Email & Password!\nOR\nIf You Are Not Signup So Please Signup First!");
    }else{
        localStorage.setItem("userFound" , "true");
        window.location.href = "index.html"
    }
}