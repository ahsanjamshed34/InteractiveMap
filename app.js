const { ShoppingCart } = require('./shoppingCart');

async function startShopping() {
    const shoppingCart = new ShoppingCart();

    try {
        await shoppingCart.addItems();
        shoppingCart.displayItems();
        await shoppingCart.updateItem();
        await shoppingCart.deleteItem();
        shoppingCart.calculateTotalPrice();
    } catch (error) {
        console.error('An error occurred:', error.message);
    }
}

startShopping();
