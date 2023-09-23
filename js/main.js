/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close');

// MENU SHOW

// Validate if exist

if(navToggle){
    
    navToggle.addEventListener('click',()=>{
        if(navMenu.classList.contains('show-menu')){

            navMenu.classList.remove('show-menu')

        }else{
            navMenu.classList.add('show-menu')
        }
    })
}

// MENU HIDDDEN

// Validate if exist

if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })
}



/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    //when click on navlink remove the menu
    navMenu.classList.remove('show-menu')
    
}
// navLink.forEach(n => {
//     n.addEventListener('click',linkAction)
    
// });


/*=============== CHANGE BACKGROUND HEADER ===============*/
const bgHeader = () =>{
    const header = document.getElementById('header')
    const header_up = document.getElementById('header-up')
    const nav__menu = document.getElementById('nav-menu')
    const float_navbar = document.getElementById('float-nav-bar')


    if(this.scrollY >= 350)
    {
        header.classList.add('bg-header')
        header_up.classList.add('remove-header-up-shadow')
        float_navbar.classList.add('float-navbar-fixed')
        float_navbar.classList.remove('container')
        nav__menu.classList.add('container')
        nav__menu.classList.add('nav-menu-fixed')
    }else 
    {
        header.classList.remove('bg-header')
        header_up.classList.remove('remove-header-up-shadow')
        float_navbar.classList.remove('float-navbar-fixed')
        float_navbar.classList.add('container')
        nav__menu.classList.remove('container')
        nav__menu.classList.remove('nav-menu-fixed')

    }








}

window.addEventListener('scroll',bgHeader)

/*=============== GSAP ANIMATION ===============*/
// gsap.from('.home__image-2',1.2,{opacity:0,y:200,delay: .1});
// gsap.from('.home__image-3',1.2,{opacity:0,y:200,delay: .5});
// gsap.from('.home__data',1.2,{opacity:0,y:-60,delay: 1});
// gsap.from('.home__bird-1',1.2,{opacity:0,x:-80,delay: 1.1});
// gsap.from('.home__bird-2',1.2,{opacity:0,x:80,delay: 1.2});



// var languages = localStorage.getItem("lang") || "en"; // اذا لم تكن اللغة متوفرة استخدم الانجليزية

// if(languages === 'en'){
//     gsap.from('.home__image-4',1.2,{opacity:0,x:200,delay: 1.3});
// }else{
//     gsap.from('.home__image-4',1.2,{opacity:0,x:-200,delay: 1.3});
// }



/*=============== CHANGE LANGUAGE ===============*/

function changeLang(){
    // const langTrigger = document.getElementById('langTrigger')

    // langTrigger.addEventListener('click', () => {
    
        languages = localStorage.getItem('lang') || 'en';
            
        if(languages === 'en'){
    
            localStorage.setItem('lang','ar')
            location.replace('index-rtl.html')
            
        }
        else{
            localStorage.setItem('lang','en')
            location.replace('index.html')
            
        }    
        
    
    // })
}

const search_btn = document.querySelectorAll('.search-btn');
const search_close = document.getElementById('close-search');

const search_Screen = document.getElementById('search-screen');
const search_Box = document.getElementById('search-box');

search_btn.forEach(ele => {
    ele.addEventListener('click', () => {

        search_Screen.classList.add('show-search-screen');
    
    
        search_Box.classList.add('show-search-box');
    })
})




search_close.addEventListener('click', () => {

    search_Screen.classList.remove('show-search-screen');

    search_Box.classList.remove('show-search-box');
})

