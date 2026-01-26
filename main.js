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