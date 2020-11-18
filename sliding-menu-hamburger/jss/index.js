const openMenu = document.querySelector('#show-menu')
const hideMenuIcon = document.querySelector('#hide-menu')
const sideMenu = document.querySelector('#nav-menu')

openMenu.addEventListener('click',function(){
    sideMenu.classList.toggle('active')
})

hideMenuIcon.addEventListener('click',function(){
    sideMenu.classList.toggle('active')
})