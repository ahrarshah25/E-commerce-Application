console.log("Login Page!");

import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";
const supabaseUrl = 'https://uhvbtcngusubtvtqgyzc.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVodmJ0Y25ndXN1YnR2dHFneXpjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM0NzEwMjYsImV4cCI6MjA3OTA0NzAyNn0.jc_mzh6JqtaIlKnQwehZktJh8LtPiV398G0riVMzP9Y'
const supabase = createClient(supabaseUrl, supabaseKey);

var userFound = localStorage.getItem("userFound")
if (userFound === "true") {
    window.location.href = "index.html"
}


function userLogin(event) {
    event.preventDefault();
    var userEmail = document.getElementById("email").value.trim();
    var userPassword = document.getElementById("password").value.trim();
    var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (userEmail === "" || userPassword === "") {
        alert("Please Enter Email + Password For Login!");
    } else if (!regex.test(userEmail)) {
        alert("Please Enter Email With Correct Syntax\nFor Example: name@domain.com")
    } else {

        const { data: loginData, error: loginError } = supabase.auth.signInWithPassword({
            email: userEmail,
            password: userPassword
        });

        if(loginError){
            alert("Error During Login: " + loginError.message);
            return;
        }

        // const username = loginData.user.user_metadata.username;
        alert("Login Successfully!");
        localStorage.setItem("userFound", "true");
        window.location.href = "index.html"
    }
}

let tooglePassword = document.getElementById("toggle-password");
tooglePassword.addEventListener("click", function(){
    let passwordField = document.getElementById("password");
    if(passwordField.type === "password"){
        passwordField.type = "text";
        tooglePassword.textContent = "Hide";
    }else{
        passwordField.type = "password";
        tooglePassword.textContent = "Show";
    }
});

let loginBtn = document.getElementById("userLogin");
loginBtn.addEventListener("click", userLogin);