// Sample product data
// const products = [
//   { id: 1, title: "Organic T-Shirt", price: 29.99, image: "images/products/product1.jpg" },
//   { id: 2, title: "Bamboo Toothbrush", price: 4.99, image: "images/products/product2.jpg" },
//   { id: 3, title: "Beeswax Wraps", price: 14.99, image: "images/products/product3.jpg" },
//   { id: 4, title: "Eco Water Bottle", price: 19.99, image: "images/products/product4.jpg" },
//   { id: 5, title: "Recycled Journal", price: 8.5, image: "images/products/product5.jpg" },
//   { id: 6, title: "Hemp Tote Bag", price: 16.75, image: "images/products/product6.jpg" },
//   { id: 7, title: "Solar Lantern", price: 39.99, image: "images/products/product7.jpg" },
//   { id: 8, title: "Compostable Phone Case", price: 24.0, image: "images/products/product8.jpg" },
//   { id: 9, title: "Reusable Bag Set", price: 11.5, image: "images/products/product9.jpg" },
//   { id: 10, title: "Wooden Hair Brush", price: 7.99, image: "images/products/product10.jpg" },
//   { id: 11, title: "Eco Yoga Mat", price: 45.0, image: "images/products/product11.jpg" },
//   { id: 12, title: "Plant-Based Soap", price: 5.99, image: "images/products/product12.jpg" },
//   { id: 13, title: "Hemp Notebook", price: 6.75, image: "images/products/product13.jpg" },
//   { id: 14, title: "Natural Face Cream", price: 18.99, image: "images/products/product14.jpg" },
//   { id: 15, title: "Plastic-Free Razor", price: 22.0, image: "images/products/product15.jpg" },
//   { id: 16, title: "Biodegradable Dish Sponge", price: 3.5, image: "images/products/product16.jpg" },
//   { id: 17, title: "Eco Cutlery Set", price: 9.99, image: "images/products/product17.jpg" },
//   { id: 18, title: "Recycled Blanket", price: 34.5, image: "images/products/product18.jpg" },
//   { id: 19, title: "Organic Lip Balm", price: 4.25, image: "images/products/product19.jpg" },
//   { id: 20, title: "Natural Cleaning Tabs", price: 12.99, image: "images/products/product20.jpg" }
// ];

const products = [
  { id: 1, title: "Organic T-Shirt", price: 699, image: "images/products/product1.jpg" },
  { id: 2, title: "Bamboo Toothbrush", price: 59, image: "images/products/product2.jpg" },
  { id: 3, title: "Beeswax Wraps", price: 299, image: "images/products/product3.jpg" },
  { id: 4, title: "Eco Water Bottle", price: 499, image: "images/products/product4.jpg" },
  { id: 5, title: "Recycled Journal", price: 149, image: "images/products/product5.jpg" },
  { id: 6, title: "Hemp Tote Bag", price: 349, image: "images/products/product6.jpg" },
  { id: 7, title: "Solar Lantern", price: 899, image: "images/products/product7.jpg" },
  { id: 8, title: "Compostable Phone Case", price: 499, image: "images/products/product8.jpg" },
  { id: 9, title: "Reusable Bag Set", price: 249, image: "images/products/product9.jpg" },
  { id: 10, title: "Wooden Hair Brush", price: 179, image: "images/products/product10.jpg" },
  { id: 11, title: "Eco Yoga Mat", price: 1199, image: "images/products/product11.jpg" },
  { id: 12, title: "Plant-Based Soap", price: 89, image: "images/products/product12.jpg" },
  { id: 13, title: "Hemp Notebook", price: 129, image: "images/products/product13.jpg" },
  { id: 14, title: "Natural Face Cream", price: 399, image: "images/products/product14.jpg" },
  { id: 15, title: "Plastic-Free Razor", price: 549, image: "images/products/product15.jpg" },
  { id: 16, title: "Biodegradable Dish Sponge", price: 59, image: "images/products/product16.jpg" },
  { id: 17, title: "Eco Cutlery Set", price: 199, image: "images/products/product17.jpg" },
  { id: 18, title: "Recycled Blanket", price: 799, image: "images/products/product18.jpg" },
  { id: 19, title: "Organic Lip Balm", price: 89, image: "images/products/product19.jpg" },
  { id: 20, title: "Natural Cleaning Tabs", price: 249, image: "images/products/product20.jpg" }
];


// Retrieve or initialize cart from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Update cart count in navbar (if present)
function updateCartDisplay() {
  const cartCount = document.getElementById("cart-count");
  if (cartCount) cartCount.textContent = cart.length;
}

// Render product cards
function displayProducts() {
  const grid = document.querySelector(".product-grid");
  if (!grid) return;

  grid.innerHTML = "";

  products.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("product-card");

    card.innerHTML = `
      <img src="${product.image}" alt="${product.title}">
      <h4>${product.title}</h4>
      
      <p>₹${product.price}</p>
      <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
    `;

    grid.appendChild(card);
  });

  handleAddToCart(); // attach event listeners
}

// Handle Add to Cart button clicks
function handleAddToCart() {
  document.querySelectorAll(".add-to-cart").forEach(btn => {
    btn.addEventListener("click", function () {
      const productId = parseInt(this.dataset.id);
      const product = products.find(p => p.id === productId);
      if (product) {
        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartDisplay();
        alert(`${product.title} added to cart!`);
      }
    });
  });
}

// Newsletter form submission
function handleNewsletterSignup() {
  const form = document.querySelector(".newsletter");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = form.querySelector("input").value.trim();

    if (!email || !email.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }

    alert(`Thanks for subscribing, ${email}!`);
    form.reset();
  });
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", function () {
  displayProducts();
  handleNewsletterSignup();
  updateCartDisplay();
});
