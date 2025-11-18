console.log("Signup Page!");


import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";
const supabaseUrl = 'https://uhvbtcngusubtvtqgyzc.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVodmJ0Y25ndXN1YnR2dHFneXpjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM0NzEwMjYsImV4cCI6MjA3OTA0NzAyNn0.jc_mzh6JqtaIlKnQwehZktJh8LtPiV398G0riVMzP9Y'
const supabase = createClient(supabaseUrl, supabaseKey);

var userFound = localStorage.getItem("userFound");
if(userFound === "true"){
    window.location.href = "index.html"
}


async function userSignup(event){
    event.preventDefault();
    
    var userName = document.getElementById("fullname").value.trim();
    var userEmail = document.getElementById("email").value.trim();
    var userPassword = document.getElementById("password").value.trim();
    var userConfirmPassword = document.getElementById("confirm-password").value.trim();
    var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if(userName === "" || userEmail === "" || userPassword === "" || userConfirmPassword === ""){
        alert("Please Fill All The Feilds To Proceed");
    }else if(!regex.test(userEmail)){
        alert("Please Enter Email With Correct Syntax\nFor Example: name@domain.com")
    }else if(userEmail === localStorage.getItem("userEmail") || userPassword === localStorage.getItem("userPassword")){
        alert("You Already Have An Account Please Login!");
        window.location.href = "login.html"
    }else if(userConfirmPassword !== userPassword){
        alert("Please Enter Correct Password In Confirm Password Feild!")
    }else{
        const {data: loginData, error: loginError} = await supabase.auth.signUp({
            email: userEmail,
            password: userPassword,
            options: {
              data: {
                 username: userName
                }
            }
        });

        if(loginError){
            alert("Error During Signup: " + loginError.message);
            return;
        }else{
        localStorage.setItem("userName" , userName);
        localStorage.setItem("userEmail" , userEmail);
        localStorage.setItem("userPassword" , userPassword);
        localStorage.setItem("userConfirmPassword" , userConfirmPassword);
        alert("Signup Successfully!");
        window.location.href= "login.html";
        }
    }
}

let signupBtn = document.getElementById("userSignup");
signupBtn.addEventListener("click", userSignup);