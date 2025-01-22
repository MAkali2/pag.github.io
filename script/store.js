const products = [
    { id: 1, name: "Producto 1", price: 10.0 },
    { id: 2, name: "Producto 2", price: 15.0 },
    { id: 3, name: "Producto 3", price: 20.0 },
];

let cart = [];
let total = 0;

// Mostrar productos
const productsContainer = document.getElementById("products");
products.forEach(product => {
    const productDiv = document.createElement("div");
    productDiv.className = "product";
    productDiv.innerHTML = `
        <h3>${product.name}</h3>
        <p>Precio: $${product.price.toFixed(2)}</p>
        <button onclick="addToCart(${product.id})">Agregar al carrito</button>
    `;
    productsContainer.appendChild(productDiv);
});

// Agregar al carrito
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    total += product.price;
    updateCart();
}

// Actualizar carrito
function updateCart() {
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";
    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
    });
    document.getElementById("total").textContent = total.toFixed(2);
}

// Integrar con la pasarela de pagos (Stripe o PayPal)
document.getElementById("checkout-button").addEventListener("click", () => {
    alert("Integra una pasarela de pagos aquí.");
});
