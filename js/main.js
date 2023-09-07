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

    this.scrollY >= 50 ? header.classList.add('bg-header')
                        :header.classList.remove('bg-header')
}

window.addEventListener('scroll',bgHeader)

/*=============== GSAP ANIMATION ===============*/
gsap.from('.home__image-2',1.2,{opacity:0,y:200,delay: .1});
gsap.from('.home__image-3',1.2,{opacity:0,y:200,delay: .5});
gsap.from('.home__data',1.2,{opacity:0,y:-60,delay: 1});
gsap.from('.home__bird-1',1.2,{opacity:0,x:-80,delay: 1.1});
gsap.from('.home__bird-2',1.2,{opacity:0,x:80,delay: 1.2});



const languages = localStorage.getItem("lang") || "en"; // اذا لم تكن اللغة متوفرة استخدم الانجليزية

if(languages === 'en'){
    gsap.from('.home__image-4',1.2,{opacity:0,x:200,delay: 1.3});
}else{
    gsap.from('.home__image-4',1.2,{opacity:0,x:-200,delay: 1.3});
}



/*=============== CHANGE LANGUAGE ===============*/


const langTrigger = document.getElementById('langTrigger')



langTrigger.addEventListener('click', () => {


    if(languages === 'en'){

        localStorage.setItem('lang','ar')
        location.replace('index-rtl.html')
    }
    else{
        localStorage.setItem('lang','en')
        location.replace('index.html')
        
    }    
    

})