// Load cart from localStorage
let cart = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : {};

// Navbar element
const cartCountEl = document.getElementById("cart-count");

// PLUS BUTTON
document.querySelectorAll(".plus").forEach(button => {
  button.addEventListener("click", () => {
    const item = button.dataset.item;
    cart[item] = (cart[item] || 0) + 1;
    saveAndUpdate(item);
  });
});

// MINUS BUTTON
document.querySelectorAll(".minus").forEach(button => {
  button.addEventListener("click", () => {
    const item = button.dataset.item;
    if (cart[item] > 0) {
      cart[item]--;
      saveAndUpdate(item);
    }
  });
});

// Save + Update UI
function saveAndUpdate(item) {
  localStorage.setItem("cart", JSON.stringify(cart));
  document.getElementById(`${item}-qty`).innerText = cart[item];
  updateCartCount();
}

// Update navbar count
function updateCartCount() {
  const total = Object.values(cart).reduce((sum, qty) => sum + qty, 0);
  cartCountEl.innerText = total;
}

// Load saved values on refresh
function updateUI() {
  for (let item in cart) {
    const qtyEl = document.getElementById(`${item}-qty`);
    if (qtyEl) qtyEl.innerText = cart[item];
  }
  updateCartCount();
}

// Initialize
updateUI();

// sign-up 

const signup = document.querySelector('.signup-back');
const signBtn = document.querySelector('.sign-up');
const side_signup = document.querySelector('.signin-side')
const closeBtn = document.querySelector('.close-btn');
const submit = document.querySelector('.submit')
const form = document.querySelector('.signup-form')

signBtn.addEventListener('click',(e)=>{
  signup.style.display = 'block'
})

side_signup.addEventListener('click',()=>{
  signup.style.display = 'block'
})

closeBtn.addEventListener('click',()=>{
  signup.style.display = 'none'
})


form.addEventListener('submit',(e)=>{
  e.preventDefault()
  signup.style.display='none'
  form.reset()
})

// sidebar slide 
const sideMenu = document.querySelector('.side-menu');
const menu = document.querySelector('.menu-bar');
const x = document.querySelector('#x-mark');
const sign_in = document.querySelector('.signin-side');

menu.addEventListener('click',()=>{
 sideMenu.style.right= '0';
})

x.addEventListener('click',()=>{
    sideMenu.style.right= '-100%';
})


