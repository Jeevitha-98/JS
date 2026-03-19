
let user = localStorage.getItem("user") || "";


function setLocation() {
  let loc = prompt("Enter your delivery location:");
  if (loc) {
    localStorage.setItem("location", loc);
    document.getElementById("locationText").innerText = loc;
  }
}


function toggleLogin() {
  let box = document.getElementById("loginBox");
  box.style.display = box.style.display === "block" ? "none" : "block";
}


function loginUser() {
  let name = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  if (name && pass) {
    user = name;
    localStorage.setItem("user", name);
    alert("Welcome " + name);
    document.getElementById("loginBox").style.display = "none";
  } else {
    alert("Enter all fields");
  }
}
let allProducts = [];
let cart = [];
let wishlist = [];


async function fetchProducts() {

  const loader = document.getElementById("loader");
  const errorMsg = document.getElementById("errorMsg");

  loader.style.display = "block";     
  errorMsg.style.display = "none";    

  try {
    const res = await fetch('https://fakestoreapi.com/products');

    if (!res.ok) throw new Error("API Error");

    const data = await res.json();

    allProducts = data.map((p, i) => ({ ...p, id: i + 1 }));

    displayProducts(allProducts);

    loader.style.display = "none";    

  } catch (err) {
    console.error("Failed to load products:", err);

    loader.style.display = "none";
    errorMsg.style.display = "block";
  }
}
function displayProducts(products) {
  const container = document.getElementById("products");
  if (!container) return;

  container.innerHTML = products.map(p => {

    const stars = "⭐".repeat(Math.round(p.rating.rate));

    return `
      <div class="product-card">

        <img src="${p.image}" alt="${p.title}" style="width:150px; height:150px; object-fit:contain;">
        
        <h4>${p.title.length > 20 ? p.title.substring(0, 20) + "..." : p.title}</h4>
        
        <p>Price: ₹${p.price}</p>

        <p style="color: Green; font-size:13px;font-weight:bold; margin:5px 0;">
          ${stars} (${p.rating.rate}) | ${p.rating.count} reviews
        </p>

        <button onclick="toggleCart(${p.id})">
          🛒 ${cart.some(c => c.id === p.id) ? 'Remove from Cart' : 'Add to Cart'}
        </button>

        <button onclick="toggleWishlist(${p.id})">
          ❤️ ${wishlist.some(w => w.id === p.id) ? 'Remove from Wishlist' : 'Add to Wishlist'}
        </button>

      </div>
    `;
  }).join("");
}

function toggleCart(id) {
  const product = allProducts.find(p => p.id === id);
  const index = cart.findIndex(c => c.id === id);

  if (index > -1) cart.splice(index, 1);
  else cart.push(product);

  updateCounts(); 
  displayProducts(allProducts);

}


function toggleWishlist(id) {
  const product = allProducts.find(p => p.id === id);
  const index = wishlist.findIndex(w => w.id === id);

  if (index > -1) wishlist.splice(index, 1);
  else wishlist.push(product);

  updateCounts(); 
  displayProducts(allProducts);
}


window.onload = fetchProducts;

function updateCounts() {
  document.getElementById("cartCount").innerText = cart.length;
  document.getElementById("wishCount").innerText = wishlist.length;
}
function toggleWishlistPanel() {
  const panel = document.getElementById("wishlistPanel");

  panel.classList.toggle("active");

  if (wishlist.length === 0) {
    panel.innerHTML = "<p>No items in wishlist</p>";
    return;
  }

  panel.innerHTML = wishlist.map(p => `
    <div>
      <span>${p.title.substring(0, 20)}...</span>
      <button onclick="removeFromWishlist(${p.id})">❌</button>
    </div>
  `).join("");
}
function removeFromWishlist(id) {
  wishlist = wishlist.filter(w => w.id !== id);

  updateCounts();
  toggleWishlistPanel(); 
  displayProducts(allProducts);
}


function toggleCart(id) {
  const product = allProducts.find(p => p.id === id);
  const existing = cart.find(c => c.id === id);

  if (existing) {
    existing.qty = (existing.qty || 1) + 1; 
  } else {
    cart.push({ ...product, qty: 1 });
  }

  updateCounts();
  displayProducts(allProducts);
}

function toggleCartPanel() {
  const panel = document.getElementById("cartPanel");

  panel.classList.toggle("active");

  if (panel.classList.contains("active")) {
    renderCartPanel(); 
  }
}

function renderCartPanel() {
  const panel = document.getElementById("cartPanel");

  if (cart.length === 0) {
    panel.innerHTML = "<p>No items in cart</p>";
    return;
  }

  const total = cart.reduce((sum, item) => {
    return sum + (item.price * (item.qty || 1));
  }, 0);

  panel.innerHTML = `
    ${cart.map(p => `
      <div style="border-bottom:1px solid #ccc; padding:8px; text-align:center;">
        
        <p><b>${p.title.substring(0, 20)}...</b></p>

        <p>Price: ₹${p.price}</p>

        <p>
          Qty: 
          <button onclick="decreaseQty(${p.id})">➖</button>
          ${p.qty || 1}
          <button onclick="increaseQty(${p.id})">➕</button>
        </p>

        <p>Subtotal: ₹${(p.price * (p.qty || 1)).toFixed(2)}</p>

        <button onclick="removeFromCart(${p.id})">❌ Remove</button>

      </div>
    `).join("")}

    <hr>

    <h3 style="text-align:center; color:green;">
      Total: ₹${total.toFixed(2)}
    </h3>
  `;
}


function removeFromCart(id) {
  cart = cart.filter(c => c.id !== id);

  updateCounts();
  renderCartPanel(); 
  displayProducts(allProducts);
}




function increaseQty(id) {
  const item = cart.find(c => c.id === id);
  if (item) {
    item.qty += 1;
  }

  updateCounts();
  renderCartPanel();
}

function decreaseQty(id) {
  const item = cart.find(c => c.id === id);

  if (item) {
    if (item.qty > 1) {
      item.qty -= 1;
    } else {
      cart = cart.filter(c => c.id !== id);
    }
  }

  updateCounts();
  renderCartPanel();
}

function filterCategory(category) {
  const filtered = allProducts.filter(p => p.category === category);
  displayProducts(filtered);
}
let filteredProducts = [];


function applyFilters() {
  let result = [...allProducts];

  
  const gender = document.getElementById("filterGender").value;
  if (gender !== "all") {
    result = result.filter(p => p.category === gender);
  }

  
  const maxPrice = document.getElementById("filterPrice").value;
  document.getElementById("priceValue").innerText = "₹" + maxPrice;
  result = result.filter(p => p.price <= maxPrice);

  
  const size = document.getElementById("filterSize").value;
  if (size !== "all") {
    result = result.filter(p => p.size === size);
  }

  
  const color = document.getElementById("filterColor").value;
  if (color !== "all") {
    result = result.filter(p => p.color === color);
  }

  
  const sort = document.getElementById("sortBy").value;
  if (sort === "priceLow") {
    result.sort((a, b) => a.price - b.price);
  } else if (sort === "priceHigh") {
    result.sort((a, b) => b.price - a.price);
  }

  
  filteredProducts = result;
  displayProducts(result);
}

function showAllProducts() {
  displayProducts(allProducts);
}

function sortProducts() {
  applyFilters();
}

function filterByGender() {
  applyFilters();
}

function filterByPrice() {
  applyFilters();
}

function filterBySize() {
  applyFilters();
}

function filterByColor() {
  applyFilters();
}


document.addEventListener("DOMContentLoaded", function () {

  const searchInput = document.getElementById("searchInput");

  searchInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      searchProducts();
    }
  });

});


function searchProducts() {
  const query = document.getElementById("searchInput").value.toLowerCase();


  if (query === "") {
    displayProducts(allProducts);
    return;
  }

  let result = [];

 
  if (query.includes("women")) {
    result = allProducts.filter(p => p.category === "women's clothing");
  } 
  
  else if (query.includes("men")) {
    result = allProducts.filter(p => p.category === "men's clothing");
  } 
  else if (query.includes("jewel") || query.includes("access")) {
    result = allProducts.filter(p => p.category === "jewelery");
  } 
  else if (query.includes("electronic")) {
    result = allProducts.filter(p => p.category === "electronics");
  } 
  else {
   
    result = allProducts.filter(p =>
      p.title.toLowerCase().includes(query)
    );
  }

  displayProducts(result);
}

function showCoupon() {
  const box = document.getElementById("couponBox");

  box.classList.add("active");

  setTimeout(() => {
    box.classList.remove("active");
  }, 2000);
}

let shownOnce = false;

window.addEventListener("scroll", () => {
  if (!shownOnce && window.scrollY > 150) {
    showCoupon();
    shownOnce = true;
  }
});