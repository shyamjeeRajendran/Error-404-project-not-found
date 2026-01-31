const uparrow = document.getElementById("arrow")

arrow.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

var submit2 = document.querySelector(".submit2")

submit2.addEventListener("click", function () {
  event.preventDefault()

  let isValid = true;


  var Regexname = /^[A-Za-z]+$/
  var Regexemail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  var Regexphone = /^\d{10}$/

  const name = document.getElementById("name")
  const email = document.getElementById("email")
  const phone = document.getElementById("phone")
  const textarea = document.getElementById("message")
  const count = document.getElementById("count")
  const error = document.querySelector(".messageerror")

  const maxLength = 200;


  if (Regexname.test(name.value) == false) {
    document.querySelector(".nameerror").style.display = "inline"
    isValid = false;
  }
  else {
    document.querySelector(".nameerror").style.display = "none"
  }
  if (Regexemail.test(email.value) == false) {
    document.querySelector(".emailerror").style.display = "inline"
    isValid = false;
  }
  else {
    document.querySelector(".emailerror").style.display = "none"
  }
  if (Regexphone.test(phone.value) == false) {
    document.querySelector(".phoneerror").style.display = "inline"
    isValid = false;
  }
  else {
    document.querySelector(".phoneerror").style.display = "none"
  }

  const length = textarea.value.length;

  if (length > maxLength) {
    error.style.display = "inline"
    isValid = false;
  }
  else {
    error.style.display = "none"
  }

  if (isValid) {
    alert("Form submitted successfully ✅");
  }

})

const textarea = document.getElementById("message")
const count = document.getElementById("count")

textarea.addEventListener("input", function () {
  count.innerHTML = textarea.value.length + "/200 characters";
});

// sign-up 

const signup = document.querySelector('.signup-back');
const signBtn = document.querySelector('.sign-up');
const side_signup = document.querySelector('.signin-side')
const closeBtn = document.querySelector('.close-btn');
const submit = document.querySelector('.submit')
const form = document.querySelector('.signup-form')

signBtn.addEventListener('click', (e) => {
  signup.style.display = 'block'
})

side_signup.addEventListener('click', () => {
  signup.style.display = 'block'
})

closeBtn.addEventListener('click', () => {
  signup.style.display = 'none'
})


form.addEventListener('submit', (e) => {
  e.preventDefault()
  signup.style.display = 'none'
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