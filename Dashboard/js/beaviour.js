const openMenu = document.querySelector('#show-menu')
const hideMenuIcon = document.querySelector('#hiding-arrow')
const sideBar = document.querySelector('#sidebar')
const userMenuIcon = document.querySelector('#user-menu-icon')
const userMenu = document.querySelector('#user-menu')
const notificationMenuIcon = document.querySelector('#notificationIcon')
const notificationMenu = document.querySelector('#userNotificationDiv')
const hidingHamburger = document.querySelector('#hiding-hamburger')



hideMenuIcon.addEventListener('click',function(){
    sideBar.classList.toggle('hidden')
    
})
hidingHamburger.addEventListener('click',function(){
    sideBar.classList.toggle('hidden')
    
})

userMenuIcon.addEventListener('click',function(){
    if (!notificationMenu.classList.contains('hidden')) {
        notificationMenu.classList.add('hidden')
        
    }
    userMenu.classList.toggle('hidden')
    
})
notificationMenuIcon.addEventListener('click',function(){
    if (!userMenu.classList.contains('hidden')) {
        userMenu.classList.add('hidden')
        
    }
    notificationMenu.classList.toggle('hidden')
    
})