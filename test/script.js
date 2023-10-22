// script.js
function addToCart(productName, quantity) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (quantity === null) {
        return; // Do nothing if the user cancels the prompt
    }

    quantity = parseInt(quantity);

    if (quantity <= 0 || isNaN(quantity)) {
        alert('Số lượng không hợp lệ.');
        return;
    }

    for (let i = 0; i < cart.length; i++) {
        if (cart[i].product === productName) {
            cart[i].quantity += quantity;
            localStorage.setItem('cart', JSON.stringify(cart));
            return;
        }
    }

    cart.push({ product: productName, quantity: quantity });
    localStorage.setItem('cart', JSON.stringify(cart));
}

function removeFromCart(productName) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].product === productName) {
            cart.splice(i, 1);
            localStorage.setItem('cart', JSON.stringify(cart));
            displayCart();
            return;
        }
    }
}

function displayCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartList = document.getElementById('cart-list');

    if (cart.length === 0) {
        cartList.innerHTML = '<li>Giỏ hàng trống</li>';
    } else {
        cartList.innerHTML = '';
        cart.forEach((item) => {
            let li = document.createElement('li');
            li.textContent = item.product + ' x ' + item.quantity;
            let removeButton = document.createElement('button');
            removeButton.textContent = 'Xóa';
            removeButton.onclick = function () {
                removeFromCart(item.product);
            };
            li.appendChild(removeButton);
            cartList.appendChild(li);
        });
    }
}

displayCart();
