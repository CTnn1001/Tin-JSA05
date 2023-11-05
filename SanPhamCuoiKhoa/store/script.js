function addToCart(productName, price) {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    cartItems.push({ name: productName, price: price });
    localStorage.setItem('cart', JSON.stringify(cartItems));
}

function buyNow(productName, price) {
    addToCart(productName, price);
    window.location.href = "checkout.html";
}

function clearCart() {
    localStorage.removeItem('cart');
    updateCart();
}

function updateCart() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartList = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    let total = 0;

    cartList.innerHTML = '';
    cartItems.forEach(item => {
        const listItem = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', function () {
            removeItemFromCart(item);
        });
        listItem.appendChild(checkbox);
        listItem.textContent = `${item.name} - ${item.price}K`;
        cartList.appendChild(listItem);
        total += item.price;
    });

    cartTotal.textContent = total;
}

function removeItemFromCart(itemToRemove) {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const updatedCart = cartItems.filter(item => item.name !== itemToRemove.name);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    updateCart();
}

updateCart();

var button = document.getElementById("tt")

button.addEventListener("click"), function() {
    window.location.href = "tt.html"
}

