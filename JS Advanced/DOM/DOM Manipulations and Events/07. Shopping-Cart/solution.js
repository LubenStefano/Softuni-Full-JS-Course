function solve() {
    let addBtn = document.getElementsByClassName("add-product");
    let checkout = document.querySelector(".checkout");
    let cartItems = [];

    for (let btn of addBtn) {
        btn.addEventListener("click", (e) => {
            let product = e.target.parentElement.parentElement;
            let productName = product.querySelector(".product-title").textContent;
            let productPrice = product.querySelector(".product-line-price").textContent;
            let cart = document.querySelector("textarea");
            cart.textContent += `Added ${productName} for ${productPrice} to the cart.\n`;
            cartItems.push({ name: productName, price: Number(productPrice) });
            btn.disabled = true;
        });
    }

    checkout.addEventListener("click", () => {
        let cart = document.querySelector("textarea");
        let uniqueProducts = [...new Set(cartItems.map((item) => item.name))];
        let totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
        cart.textContent += `You bought ${uniqueProducts.join(", ")} for ${totalPrice.toFixed(2)}.`;
        checkout.disabled = true;
        for (let btn of addBtn) {
            btn.disabled = true;
        }
    });
}
