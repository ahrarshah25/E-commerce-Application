console.log("Checkout Page!");


var userEmail = document.getElementById("userEmail").value = localStorage.getItem("userEmail");
var userName = document.getElementById("userName").value = localStorage.getItem("userName");

function placeOrder(event){
    event.preventDefault();
    var userAddress = document.getElementById("userAddress").value.trim();
    var userContact = document.getElementById("userContact").value.trim();
    var userOrderProduct = localStorage.getItem("userOrderProduct");

    
    if(userAddress === "" || userContact === ""){
        alert("Please Fill All The Feilds To Complete Your Order");
    }else if(userContact < 11 || userContact < 12){
        alert("Please Enter Corrrect Number!");
    }else{
       alert("Hello");
    }
    
}