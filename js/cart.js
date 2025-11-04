console.log("Cart Page!");



function loadCart() {
    var cartItems = JSON.parse(localStorage.getItem("cartItems"));
    var cartContainer = document.getElementById("cart-container");
    var emptyMsg = document.getElementById("empty-cart");
    var summaryBox = document.getElementById("cart-summary");
    var subtotalBox = document.getElementById("subtotal");
    var totalBox = document.getElementById("total");

    if (!cartItems || cartItems.length === 0) {
        emptyMsg.classList.remove("d-none");
        return;
    }

    var subtotal = 0;

    for (var i = 0; i < cartItems.length; i++) {
        var item = cartItems[i];
        var box = document.createElement("div");
        box.className = "col-md-4 fade-up";

        if(item === "Head & Shoulders Shampoo"){
            box.innerHTML = `
            <div class="card shadow-sm p-3 lift-on-hover">
                <img src="/assets/shampo.png" class="card-img-top" alt="Head & Shoulders Shampoo">
                <h6 class="mt-3">Head & Shoulders Shampoo</h6>
                <p class="text-muted">Rs. 899</p>
                <button class="btn btn-outline-danger btn-sm" onclick="removeItem(${i})">Remove</button>
            </div>
        `;
        cartContainer.appendChild(box);
        subtotal += 899;
        }else if(item === "Wireless Earbuds"){
            box.innerHTML = `
            <div class="card shadow-sm p-3 lift-on-hover">
                <img src="/assets/earbuds.png" class="card-img-top" alt="Wireless Earbuds">
                <h6 class="mt-3">Wireless Earbuds</h6>
                <p class="text-muted">Rs. 2,499</p>
                <button class="btn btn-outline-danger btn-sm" onclick="removeItem(${i})">Remove</button>
            </div>
        `;
        subtotal += 2499;
        cartContainer.appendChild(box);
    }else if(item === "Colgate Toothpaste"){
            box.innerHTML = `
            <div class="card shadow-sm p-3 lift-on-hover">
                <img src="/assets/colgate.png" class="card-img-top" alt="Colgate Toothpaste">
                <h6 class="mt-3">Colgate Toothpaste</h6>
                <p class="text-muted">Rs. 249</p>
                <button class="btn btn-outline-danger btn-sm" onclick="removeItem(${i})">Remove</button>
            </div>
        `;
        subtotal += 249;
        cartContainer.appendChild(box);
    }else if(item === "Fair & Lovely Cream"){
            box.innerHTML = `
            <div class="card shadow-sm p-3 lift-on-hover">
                <img src="/assets/fair&lovely.png" class="card-img-top" alt="Fair & Lovely Cream">
                <h6 class="mt-3">Fair & Lovely Cream</h6>
                <p class="text-muted">Rs. 199</p>
                <button class="btn btn-outline-danger btn-sm" onclick="removeItem(${i})">Remove</button>
            </div>
        `;
        subtotal += 199;
        cartContainer.appendChild(box);
    }else if(item === "Nestle Milk Pack 1L"){
            box.innerHTML = `
            <div class="card shadow-sm p-3 lift-on-hover">
                <img src="/assets/milkpack.png" class="card-img-top" alt="Nestle Milk Pack 1L">
                <h6 class="mt-3">Nestle Milk Pack 1L</h6>
                <p class="text-muted">Rs. 250</p>
                <button class="btn btn-outline-danger btn-sm" onclick="removeItem(${i})">Remove</button>
            </div>
        `;
        subtotal += 250;
        cartContainer.appendChild(box);
    }else if(item === "Dove Moisturizing Soap"){
            box.innerHTML = `
            <div class="card shadow-sm p-3 lift-on-hover">
                <img src="/assets/dove.png" class="card-img-top" alt="Dove Moisturizing Soap">
                <h6 class="mt-3">Dove Moisturizing Soap</h6>
                <p class="text-muted">Rs. 120</p>
                <button class="btn btn-outline-danger btn-sm" onclick="removeItem(${i})">Remove</button>
            </div>
        `;
        subtotal += 120;
        cartContainer.appendChild(box);
    }else if(item === "Galaxy Chocolate Bar"){
            box.innerHTML = `
            <div class="card shadow-sm p-3 lift-on-hover">
                <img src="/assets/chocolate.png" class="card-img-top" alt="Galaxy Chocolate Bar">
                <h6 class="mt-3">Galaxy Chocolate Bar</h6>
                <p class="text-muted">Rs. 150</p>
                <button class="btn btn-outline-danger btn-sm" onclick="removeItem(${i})">Remove</button>
            </div>
        `;
        subtotal += 150;
        cartContainer.appendChild(box);
    }else if(item === "Apple iPhone 13"){
            box.innerHTML = `
            <div class="card shadow-sm p-3 lift-on-hover">
                <img src="/assets/iphone.png" class="card-img-top" alt="Apple iPhone 13">
                <h6 class="mt-3">Apple iPhone 13</h6>
                <p class="text-muted">Rs. 329,999</p>
                <button class="btn btn-outline-danger btn-sm" onclick="removeItem(${i})">Remove</button>
            </div>
        `;
        subtotal += 329999;
        cartContainer.appendChild(box);
    }else if(item === "Samsung 55” LED TV"){
            box.innerHTML = `
            <div class="card shadow-sm p-3 lift-on-hover">
                <img src="/assets/led.png" class="card-img-top" alt="Samsung 55” LED TV">
                <h6 class="mt-3">Samsung 55” LED TV</h6>
                <p class="text-muted">Rs. 124,999</p>
                <button class="btn btn-outline-danger btn-sm" onclick="removeItem(${i})">Remove</button>
            </div>
        `;
        subtotal += 124999;
        cartContainer.appendChild(box);
    }else if(item === "HP Laptop 15s"){
            box.innerHTML = `
            <div class="card shadow-sm p-3 lift-on-hover">
                <img src="/assets/laptop.png" class="card-img-top" alt="HP Laptop 15s">
                <h6 class="mt-3">HP Laptop 15s</h6>
                <p class="text-muted">Rs. 154,999</p>
                <button class="btn btn-outline-danger btn-sm" onclick="removeItem(${i})">Remove</button>
            </div>
        `;
        subtotal += 154999;
        cartContainer.appendChild(box);
    }else if(item === "Nike Running Shoes"){
            box.innerHTML = `
            <div class="card shadow-sm p-3 lift-on-hover">
                <img src="/assets/shoes.png" class="card-img-top" alt="Nike Running Shoes">
                <h6 class="mt-3">Nike Running Shoes</h6>
                <p class="text-muted">Rs. 13,999</p>
                <button class="btn btn-outline-danger btn-sm" onclick="removeItem(${i})">Remove</button>
            </div>
        `;
        subtotal += 13999;
        cartContainer.appendChild(box);
    }else if(item === "School Backpack"){
            box.innerHTML = `
            <div class="card shadow-sm p-3 lift-on-hover">
                <img src="/assets/back.png" class="card-img-top" alt="School Backpack">
                <h6 class="mt-3">School Backpack</h6>
                <p class="text-muted">Rs. 1,499</p>
                <button class="btn btn-outline-danger btn-sm" onclick="removeItem(${i})">Remove</button>
            </div>
        `;
        subtotal += 1499;
        cartContainer.appendChild(box);
    }else if(item === "Ray-Ban Sunglasses"){
            box.innerHTML = `
            <div class="card shadow-sm p-3 lift-on-hover">
                <img src="/assets/glasses.png" class="card-img-top" alt="Ray-Ban Sunglasses">
                <h6 class="mt-3">Ray-Ban Sunglasses</h6>
                <p class="text-muted">Rs. 7,999</p>
                <button class="btn btn-outline-danger btn-sm" onclick="removeItem(${i})">Remove</button>
            </div>
        `;
        subtotal += 7999;
        cartContainer.appendChild(box);
    }else if(item === "JBL Bluetooth Speaker"){
            box.innerHTML = `
            <div class="card shadow-sm p-3 lift-on-hover">
                <img src="/assets/speaker.png" class="card-img-top" alt="JBL Bluetooth Speaker">
                <h6 class="mt-3">JBL Bluetooth Speaker</h6>
                <p class="text-muted">Rs. 9,799</p>
                <button class="btn btn-outline-danger btn-sm" onclick="removeItem(${i})">Remove</button>
            </div>
        `;
        subtotal += 9799;
        cartContainer.appendChild(box);
    }else if(item === "Haier AC 1 Ton"){
            box.innerHTML = `
            <div class="card shadow-sm p-3 lift-on-hover">
                <img src="/assets/ac.png" class="card-img-top" alt="Haier AC 1 Ton">
                <h6 class="mt-3">Haier AC 1 Ton</h6>
                <p class="text-muted">Rs. 82,999</p>
                <button class="btn btn-outline-danger btn-sm" onclick="removeItem(${i})">Remove</button>
            </div>
        `;
        subtotal += 82999;
        cartContainer.appendChild(box);
    }else if(item === "Anker Power Bank 20000mAh"){
            box.innerHTML = `
            <div class="card shadow-sm p-3 lift-on-hover">
                <img src="/assets/powerbank.png" class="card-img-top" alt="Anker Power Bank 20000mAh">
                <h6 class="mt-3">Anker Power Bank 20000mAh</h6>
                <p class="text-muted">Rs. 4,999</p>
                <button class="btn btn-outline-danger btn-sm" onclick="removeItem(${i})">Remove</button>
            </div>
        `;
        subtotal += 4999;
        cartContainer.appendChild(box);
    }else if(item === "Logitech Keyboard & Mouse Combo"){
            box.innerHTML = `
            <div class="card shadow-sm p-3 lift-on-hover">
                <img src="/assets/keyboard.png" class="card-img-top" alt="Logitech Keyboard & Mouse Combo">
                <h6 class="mt-3">Logitech Keyboard & Mouse Combo</h6>
                <p class="text-muted">Rs. 3,799</p>
                <button class="btn btn-outline-danger btn-sm" onclick="removeItem(${i})">Remove</button>
            </div>
        `;
        subtotal += 3799;
        cartContainer.appendChild(box);
    }else if(item === "Cadbury Dairy Milk 90g"){
            box.innerHTML = `
            <div class="card shadow-sm p-3 lift-on-hover">
                <img src="/assets/cadbury.png" class="card-img-top" alt="Cadbury Dairy Milk 90g">
                <h6 class="mt-3">Cadbury Dairy Milk 90g</h6>
                <p class="text-muted">Rs. 220</p>
                <button class="btn btn-outline-danger btn-sm" onclick="removeItem(${i})">Remove</button>
            </div>
        `;
        subtotal += 220;
        cartContainer.appendChild(box);
    }else if(item === "Golden Pearl Beauty Soap"){
            box.innerHTML = `
            <div class="card shadow-sm p-3 lift-on-hover">
                <img src="/assets/soap.png" class="card-img-top" alt="Golden Pearl Beauty Soap">
                <h6 class="mt-3">Golden Pearl Beauty Soap</h6>
                <p class="text-muted">Rs. 85</p>
                <button class="btn btn-outline-danger btn-sm" onclick="removeItem(${i})">Remove</button>
            </div>
        `;
        subtotal += 85;
        cartContainer.appendChild(box);
    }else if(item === "Detol Hand Sanitizer 50ml"){
            box.innerHTML = `
            <div class="card shadow-sm p-3 lift-on-hover">
                <img src="/assets/dettol.png" class="card-img-top" alt="Detol Hand Sanitizer 50ml">
                <h6 class="mt-3">Detol Hand Sanitizer 50ml</h6>
                <p class="text-muted">Rs. 120</p>
                <button class="btn btn-outline-danger btn-sm" onclick="removeItem(${i})">Remove</button>
            </div>
        `;
        subtotal += 120;
        cartContainer.appendChild(box);
    }else if(item === "Pampers Baby Diapers"){
            box.innerHTML = `
            <div class="card shadow-sm p-3 lift-on-hover">
                <img src="/assets/disaper.png" class="card-img-top" alt="Pampers Baby Diapers">
                <h6 class="mt-3">Pampers Baby Diapers</h6>
                <p class="text-muted">Rs. 1,499</p>
                <button class="btn btn-outline-danger btn-sm" onclick="removeItem(${i})">Remove</button>
            </div>
        `;
        subtotal += 1499;
        cartContainer.appendChild(box);
    }else if(item === "Samsung Microwave 23L"){
            box.innerHTML = `
            <div class="card shadow-sm p-3 lift-on-hover">
                <img src="/assets/microwave.png" class="card-img-top" alt="Samsung Microwave 23L">
                <h6 class="mt-3">Samsung Microwave 23L</h6>
                <p class="text-muted">Rs. 26,999</p>
                <button class="btn btn-outline-danger btn-sm" onclick="removeItem(${i})">Remove</button>
            </div>
        `;
        subtotal += 26999;
        cartContainer.appendChild(box);
    }else if(item === "Canon DSLR Camera"){
            box.innerHTML = `
            <div class="card shadow-sm p-3 lift-on-hover">
                <img src="/assets/camera.png" class="card-img-top" alt="Canon DSLR Camera">
                <h6 class="mt-3">Canon DSLR Camera</h6>
                <p class="text-muted">Rs. 72,999</p>
                <button class="btn btn-outline-danger btn-sm" onclick="removeItem(${i})">Remove</button>
            </div>
        `;
        subtotal += 72999;
        cartContainer.appendChild(box);
    }else if(item === "Philips Hair Dryer"){
            box.innerHTML = `
            <div class="card shadow-sm p-3 lift-on-hover">
                <img src="/assets/hairdryer.png" class="card-img-top" alt="Philips Hair Dryer">
                <h6 class="mt-3">Philips Hair Dryer</h6>
                <p class="text-muted">Rs. 5,199</p>
                <button class="btn btn-outline-danger btn-sm" onclick="removeItem(${i})">Remove</button>
            </div>
        `;
        subtotal += 5199;
        cartContainer.appendChild(box);
    }
    subtotalBox.innerHTML =  "RS. " + subtotal.toFixed(2);
    totalBox.innerHTML = (subtotal).toFixed(2);
    localStorage.setItem("Total" , subtotal);
    summaryBox.classList.remove("d-none");

}
};


function removeItem(index) {
    var cartItems = JSON.parse(localStorage.getItem("cartItems"));
    cartItems.splice(index, 1); 
    localStorage.setItem("cartItems", JSON.stringify(cartItems)); 
    location.reload();
}

function checkout(){
    window.location.href = "checkout.html"
}