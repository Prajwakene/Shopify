// JavaScript code to handle checkbox selection and price calculation
const chocolateItems = document.querySelectorAll('.chocolate-item input');
const cartItems = document.querySelector('.cart-items');
const totalPrice = document.getElementById('total-price');

let selectedChocolates = [];

chocolateItems.forEach((chocolate) => {
    chocolate.addEventListener('change', (e) => {
        const selectedChocolate = e.target.value;

        if (e.target.checked) {
            if (selectedChocolates.length < 8) {
                selectedChocolates.push(selectedChocolate);
            } else {
                e.target.checked = false;
                alert('You can select up to 8 chocolates.');
            }
        } else {
            const index = selectedChocolates.indexOf(selectedChocolate);
            if (index !== -1) {
                selectedChocolates.splice(index, 1);
            }
        }

        updateCart();
    });
});

function updateCart() {
    cartItems.innerHTML = '';
    let total = 0;

    selectedChocolates.forEach((chocolate) => {
        const listItem = document.createElement('li');
        listItem.textContent = chocolate;
        cartItems.appendChild(listItem);
        total += calculateChocolatePrice(chocolate);
    });

    
    totalPrice.textContent = `$${total.toFixed(2)}`;
}

function calculateChocolatePrice(chocolate) {
    // You need to implement the logic to calculate the price of each chocolate here
    // This could involve querying your Shopify store for the price of the selected chocolate
    // and returning it.
    // For simplicity, we'll assume a fixed price for each chocolate here.
    const prices = {
        'Chocolate 1': 2.99,
        // Add prices for other chocolates as needed
    };

    return prices[chocolate] || 0;
}
