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
 
function nextSlide() {
  current = (current + 1) % slides.length;
  showSlide(current);
}

function prevSlide() {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
}
next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

// reviews

const wrapper = document.querySelector('.review-wrapper');
const dots = document.querySelectorAll('.dot');
const totalSlides = dots.length;

let currentIndex = 0;
let autoSlideInterval; 

function goToSlide(index) {
  currentIndex = index;
  const offset = -currentIndex * 100;
  wrapper.style.transform = `translateX(${offset}%)`;
  document.querySelector('.dot.active').classList.remove('active');
  dots[currentIndex].classList.add('active');
}


function nextSlide1() {
  currentIndex++;
  if (currentIndex >= totalSlides) {
    currentIndex = 0;
  }
  goToSlide(currentIndex);
}
function startAutoSlide() {
  autoSlideInterval = setInterval(nextSlide1,5000); // 
}
 startAutoSlide();
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    goToSlide(index);
   });
});