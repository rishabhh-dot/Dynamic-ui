
const restaurants = [
  {
    name: "Pizza Palace",
    category: "Pizza",
    price: 249,
    rating: "4.5",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591"
  },
  {
    name: "Burger Hub",
    category: "Burger",
    price: 149,
    rating: "4.3",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
  },
  {
    name: "Biryani House",
    category: "Biryani",
    price: 199,
    rating: "4.7",
    image: "https://images.unsplash.com/photo-1563379091339-03246963d51a"
  },
  {
    name: "Chinese Corner",
    category: "Chinese",
    price: 179,
    rating: "4.2",
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246"
  },
  {
    name: "Sweet Treats",
    category: "Dessert",
    price: 99,
    rating: "4.6",
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307"
  },
  {
    name: "Food Express",
    category: "Pizza",
    price: 299,
    rating: "4.4",
    image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3"
  }
];

let cart = [];

const restaurantGrid = document.getElementById("restaurantGrid");
const cartItems = document.getElementById("cartItems");
const totalAmount = document.getElementById("totalAmount");
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

function showRestaurants(data) {
  restaurantGrid.innerHTML = "";

  data.forEach((item, index) => {
    restaurantGrid.innerHTML += `
      <div class="card">
        <img src="${item.image}" alt="${item.name}">
        <div class="card-content">
          <h3>${item.name}</h3>
          <p>${item.category} | ⭐ ${item.rating}</p>
          <p>Starting from ₹${item.price}</p>
          <button onclick="addToCart(${index})">Add to Cart</button>
        </div>
      </div>
    `;
  });
}

function addToCart(index) {
  cart.push(restaurants[index]);
  updateCart();
}

function updateCart() {
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;

    cartItems.innerHTML += `
      <div>
        <span>${item.name}</span>
        <span>
          ₹${item.price}
          <button onclick="removeItem(${index})">Remove</button>
        </span>
      </div>
    `;
  });

  totalAmount.innerText = total;
}

function removeItem(index) {
  cart.splice(index, 1);
  updateCart();
}

function filterCategory(category) {
  if (category === "All") {
    showRestaurants(restaurants);
  } else {
    const filtered = restaurants.filter(item => item.category === category);
    showRestaurants(filtered);
  }
}

function searchRestaurants() {
  const searchValue = document.getElementById("searchInput").value.toLowerCase();

  const searched = restaurants.filter(item =>
    item.name.toLowerCase().includes(searchValue) ||
    item.category.toLowerCase().includes(searchValue)
  );

  showRestaurants(searched);
}

function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
  } else {
    alert("Order placed successfully!");
    cart = [];
    updateCart();
  }
}

menuBtn.addEventListener("click", () => {
  if (navLinks.style.display === "flex") {
    navLinks.style.display = "none";
  } else {
    navLinks.style.display = "flex";
  }
});

showRestaurants(restaurants);
