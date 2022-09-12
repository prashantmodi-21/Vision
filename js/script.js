burger = document.querySelector('#burger')
navheight = document.querySelector('.height')
navbar = document.querySelector('.navbar')
social = document.querySelector('.social')

burger.addEventListener('click', ()=>{
    navheight.classList.toggle('height')
    navbar.classList.toggle('visibilty')
    social.classList.toggle('visibilty')
})