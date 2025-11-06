console.log("Shop Page!");

var userFound = localStorage.getItem("userFound");
if(userFound === "true"){
    var userProfile = document.getElementById("userProfile");
    userProfile.style.display = "block"
};


function userLogout(){
    alert("Logout Successfully!");
    localStorage.removeItem("userFound" , "true");
}

function userCart(cartProduct) {
    if(userFound !== "true"){
        alert("Please Login First!");
        window.location.href = "login.html";
    }else{
    alert(cartProduct + " added to cart successfully!");
    var cart = JSON.parse(localStorage.getItem("cartItems")) || [];
    cart.push(cartProduct);
    localStorage.setItem("cartItems", JSON.stringify(cart));
    }
};

function userProduct(userOrderProduct){
    localStorage.setItem("userOrderProduct" , userOrderProduct);
    window.location.href = "checkout.html";
};