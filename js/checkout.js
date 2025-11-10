console.log("Checkout Page!");


var userEmail = document.getElementById("userEmail").value = localStorage.getItem("userEmail");
var userName = document.getElementById("userName").value = localStorage.getItem("userName");

var userOrderProduct = localStorage.getItem("userOrderProduct");

if (userOrderProduct === "Head & Shoulders Shampoo") {
    document.getElementById("product-image").src = "assets/shampo.png";
    document.getElementById("product-price").textContent = "899";
    document.getElementById("subtotal").textContent = "899";
    document.getElementById("product-name").textContent = "Head & Shoulders Shampoo";
} else if (userOrderProduct === "Wireless Earbuds") {
    document.getElementById("product-image").src = "assets/earbuds.png";
    document.getElementById("product-price").textContent = "2,499";
    document.getElementById("subtotal").textContent = "2,499";
    document.getElementById("product-name").textContent = "Wireless Earbuds";
} else if (userOrderProduct === "Colgate Toothpaste") {
    document.getElementById("product-image").src = "assets/colgate.png";
    document.getElementById("product-price").textContent = "249";
    document.getElementById("subtotal").textContent = "249";
    document.getElementById("product-name").textContent = "Colgate Toothpaste";
} else if (userOrderProduct === "Fair & Lovely Cream") {
    document.getElementById("product-image").src = "assets/fair&lovely.png";
    document.getElementById("product-price").textContent = "199";
    document.getElementById("subtotal").textContent = "199";
    document.getElementById("product-name").textContent = "Fair & Lovely Cream";
} else if (userOrderProduct === "Nestle Milk Pack 1L") {
    document.getElementById("product-image").src = "assets/milkpack.png";
    document.getElementById("product-price").textContent = "250";
    document.getElementById("subtotal").textContent = "250";
    document.getElementById("product-name").textContent = "Nestle Milk Pack 1L";
} else if (userOrderProduct === "Dove Moisturizing Soap") {
    document.getElementById("product-image").src = "assets/dove.png";
    document.getElementById("product-price").textContent = "120";
    document.getElementById("subtotal").textContent = "120";
    document.getElementById("product-name").textContent = "Dove Moisturizing Soap";
} else if (userOrderProduct === "Galaxy Chocolate Bar") {
    document.getElementById("product-image").src = "assets/chocolate.png";
    document.getElementById("product-price").textContent = "150";
    document.getElementById("subtotal").textContent = "150";
    document.getElementById("product-name").textContent = "Galaxy Chocolate Bar";
} else if (userOrderProduct === "Apple iPhone 13") {
    document.getElementById("product-image").src = "assets/iphone.png";
    document.getElementById("product-price").textContent = "329,999";
    document.getElementById("subtotal").textContent = "329,999";
    document.getElementById("product-name").textContent = "Apple iPhone 13";
} else if (userOrderProduct === "HP Laptop 15s") {
    document.getElementById("product-image").src = "assets/laptop.png";
    document.getElementById("product-price").textContent = "154,999";
    document.getElementById("subtotal").textContent = "154,999";
    document.getElementById("product-name").textContent = "HP Laptop 15s";
} else if (userOrderProduct === "Samsung 55” LED TV") {
    document.getElementById("product-image").src = "assets/led.png";
    document.getElementById("product-price").textContent = "124,999";
    document.getElementById("subtotal").textContent = "124,999";
    document.getElementById("product-name").textContent = "Samsung 55” LED TV";
} else if (userOrderProduct === "Nike Running Shoes") {
    document.getElementById("product-image").src = "assets/shoes.png";
    document.getElementById("product-price").textContent = "13,999";
    document.getElementById("subtotal").textContent = "13,999";
    document.getElementById("product-name").textContent = "Nike Running Shoes";
} else if (userOrderProduct === "School Backpack") {
    document.getElementById("product-image").src = "assets/back.png";
    document.getElementById("product-price").textContent = "1,499";
    document.getElementById("subtotal").textContent = "1,499";
    document.getElementById("product-name").textContent = "School Backpack";
} else if (userOrderProduct === "Ray-Ban Sunglasses") {
    document.getElementById("product-image").src = "assets/glasses.png";
    document.getElementById("product-price").textContent = "7,999";
    document.getElementById("subtotal").textContent = "7,999";
    document.getElementById("product-name").textContent = "Ray-Ban Sunglasses";
} else if (userOrderProduct === "JBL Bluetooth Speaker") {
    document.getElementById("product-image").src = "assets/speaker.png";
    document.getElementById("product-price").textContent = "9,799";
    document.getElementById("subtotal").textContent = "9,799";
    document.getElementById("product-name").textContent = "JBL Bluetooth Speaker";
} else if (userOrderProduct === "Haier AC 1 Ton") {
    document.getElementById("product-image").src = "assets/ac.png";
    document.getElementById("product-price").textContent = "82,999";
    document.getElementById("subtotal").textContent = "82,999";
    document.getElementById("product-name").textContent = "Haier AC 1 Ton";
} else if (userOrderProduct === "Anker Power Bank 20000mAh") {
    document.getElementById("product-image").src = "assets/powerbank.png";
    document.getElementById("product-price").textContent = "4,999";
    document.getElementById("subtotal").textContent = "4,999";
    document.getElementById("product-name").textContent = "Anker Power Bank 20000mAh";
} else if (userOrderProduct === "Logitech Keyboard & Mouse Combo") {
    document.getElementById("product-image").src = "assets/keyboard.png";
    document.getElementById("product-price").textContent = "3,799";
    document.getElementById("subtotal").textContent = "3,799";
    document.getElementById("product-name").textContent = "Logitech Keyboard & Mouse Combo";
} else if (userOrderProduct === "Cadbury Dairy Milk 90g") {
    document.getElementById("product-image").src = "assets/cadbury.png";
    document.getElementById("product-price").textContent = "220";
    document.getElementById("subtotal").textContent = "220";
    document.getElementById("product-name").textContent = "Cadbury Dairy Milk 90g";
} else if (userOrderProduct === "Golden Pearl Beauty Soap") {
    document.getElementById("product-image").src = "assets/soap.png";
    document.getElementById("product-price").textContent = "85";
    document.getElementById("subtotal").textContent = "85";
    document.getElementById("product-name").textContent = "Golden Pearl Beauty Soap";
} else if (userOrderProduct === "Dettol Hand Sanitizer 50ml") {
    document.getElementById("product-image").src = "assets/dettol.png";
    document.getElementById("product-price").textContent = "120";
    document.getElementById("subtotal").textContent = "120";
    document.getElementById("product-name").textContent = "Dettol Hand Sanitizer 50ml";
} else if (userOrderProduct === "Pampers Baby Diapers") {
    document.getElementById("product-image").src = "assets/diapers.png";
    document.getElementById("product-price").textContent = "1,499";
    document.getElementById("subtotal").textContent = "1,499";
    document.getElementById("product-name").textContent = "Pampers Baby Diapers";
} else if (userOrderProduct === "Samsung Microwave 23L") {
    document.getElementById("product-image").src = "assets/microwave.png";
    document.getElementById("product-price").textContent = "26,999";
    document.getElementById("subtotal").textContent = "26,999";
    document.getElementById("product-name").textContent = "Samsung Microwave 23L";
} else if (userOrderProduct === "Canon DSLR Camera") {
    document.getElementById("product-image").src = "assets/camera.png";
    document.getElementById("product-price").textContent = "72,999";
    document.getElementById("subtotal").textContent = "72,999";
    document.getElementById("product-name").textContent = "Canon DSLR Camera";
} else if (userOrderProduct === "Philips Hair Dryer") {
    document.getElementById("product-image").src = "assets/hairdryer.png";
    document.getElementById("product-price").textContent = "5,199";
    document.getElementById("subtotal").textContent = "5,199";
    document.getElementById("product-name").textContent = "Philips Hair Dryer";
}


function placeOrder(event) {
    event.preventDefault();
    var userAddress = document.getElementById("userAddress").value.trim();
    var userContact = document.getElementById("userContact").value.trim();


    if (userAddress === "" || userContact === "") {
        alert("Please Fill All The Feilds To Complete Your Order");
    } else if (userContact < 11 || userContact < 12) {
        alert("Please Enter Corrrect Number!");
    } else {
        alert("Hello");
    }

};