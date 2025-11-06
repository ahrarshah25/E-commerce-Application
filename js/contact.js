console.log("Contact Page!");


function userContact(event){
    event.preventDefault();

    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var message = document.getElementById("message").value.trim();

    if(name === "" || email === "" || message === ""){
        alert("Please Fill All The Feilds!")
    }else{
        alert("Your Message Have Been Send Successfully!\nYour Message Was: " + message);
        window.location.href = "index.html";
    }
}