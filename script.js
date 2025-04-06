const products = [
  {
    id: 1,
    name: "Красные носки",
    price: 250,
    img: "https://via.placeholder.com/150/FF0000",
  },
  {
    id: 2,
    name: "Синие носки",
    price: 300,
    img: "https://via.placeholder.com/150/0000FF",
  },
  {
    id: 3,
    name: "Зелёные носки",
    price: 270,
    img: "https://via.placeholder.com/150/008000",
  },
  {
    id: 4,
    name: "Жёлтые носки",
    price: 280,
    img: "https://via.placeholder.com/150/FFD700",
  },
];

const productList = document.getElementById("product-list");
const cartItems = [];
const cartModal = document.getElementById("cart-modal");

function renderProducts() {
  products.forEach((product) => {
    const card = document.createElement("div");
    card.className = "col-md-3";
    card.innerHTML = `
            <div class="card p-3">
                <img src="${product.img}" class="card-img-top" alt="${product.name}">
                <div class="card-body text-center">
                    <h5>${product.name}</h5>
                    <p>${product.price} грн</p>
                    <button class="btn btn-primary" onclick="addToCart(${product.id})">Добавить</button>
                </div>
            </div>
        `;
    productList.appendChild(card);
  });
}

function addToCart(id) {
  const product = products.find((p) => p.id === id);
  cartItems.push(product);
  document.getElementById("cart-count").innerText = cartItems.length;
  alert("Товар добавлен в корзину!");
}

function openCart() {
  const cartList = document.getElementById("cart-items");
  cartList.innerHTML = "";
  cartItems.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - ${item.price} грн`;
    cartList.appendChild(li);
  });
  cartModal.style.display = "flex";
}

function closeCart() {
  cartModal.style.display = "none";
}

function checkout() {
  alert("Заказ оформлен! 🎉");
  cartItems.length = 0;
  document.getElementById("cart-count").innerText = 0;
  closeCart();
}

renderProducts();
