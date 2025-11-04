console.log("Shop Page!");


function userCart(cartProduct) {
    alert(cartProduct + " added to cart successfully!");
    let cart = JSON.parse(localStorage.getItem("cartItems")) || [];
    cart.push(cartProduct);
    localStorage.setItem("cartItems", JSON.stringify(cart));
}