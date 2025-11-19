console.log("Shop Page!");
import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabaseUrl = "https://uhvbtcngusubtvtqgyzc.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVodmJ0Y25ndXN1YnR2dHFneXpjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM0NzEwMjYsImV4cCI6MjA3OTA0NzAyNn0.jc_mzh6JqtaIlKnQwehZktJh8LtPiV398G0riVMzP9Y";
const supabase = createClient(supabaseUrl, supabaseKey);

var userFound = localStorage.getItem("userFound");

if (userFound === "true") {
    document.getElementById("userProfile").style.display = "block";
}

function userLogout() {
    alert("Logout Successfully!");
    localStorage.removeItem("userFound");
    window.location.href = "login.html";
}

async function loadShopProducts() {
    var shopContainer = document.getElementById("shopContainer");
    shopContainer.innerHTML = "";

    const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("status", "approved");

    if (error) {
        alert("Error loading shop products!");
        return;
    }

    for (var i = 0; i < data.length; i++) {
        var p = data[i];

        var card = document.createElement("div");
        card.className = "shop-item";

        card.innerHTML =
            "<img src='" + p.image_url + "'>" +
            "<h3>" + p.company + "</h3>" +
            "<p>Price: $" + p.price + "</p>" +
            "<button onclick=\"userCart('" + p.company + "')\">Add to Cart</button>" +
            "<button onclick=\"userProduct('" + p.id + "')\">Buy Now</button>";

        shopContainer.appendChild(card);
    }
}

loadShopProducts();

function userCart(cartProduct) {
    if (userFound !== "true") {
        alert("Please Login First!");
        window.location.href = "login.html";
    } else {
        alert(cartProduct + " added to cart successfully!");

        var cart = JSON.parse(localStorage.getItem("cartItems"));
        if (cart === null) {
            cart = [];
        }

        cart.push(cartProduct);
        localStorage.setItem("cartItems", JSON.stringify(cart));
    }
}

function userProduct(productId) {
    localStorage.setItem("userOrderProduct", productId);
    window.location.href = "checkout.html";
}
