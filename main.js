// sidebar slide 
const sideMenu = document.querySelector('.side-menu')
const menu = document.querySelector('.menu-bar')
const x = document.querySelector('#x-mark')
const sign_in = document.querySelector('.signin-side')

menu.addEventListener('click',()=>{
 sideMenu.style.right= '0';
})

x.addEventListener('click',()=>{
    sideMenu.style.right= '-100%';
})

// hero section 
const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let current = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) slide.classList.add('active');
  });
}

// Next 
function nextSlide() {
  current = (current + 1) % slides.length;
  showSlide(current);
}

// Previous 
function prevSlide() {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
}

// Event listener
next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);
