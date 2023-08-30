/*=============== IMPORTS ===============*/
// import trans from "../js/translations";
const languages = localStorage.getItem("lang") || "en"; // اذا لم تكن اللغة متوفرة استخدم الانجليزية


const trans = {
    en : {
        mainTitle : 'Faculty Of Agriculture',
        subTitle : 'Damanhour University',
        login : 'LOGIN',
        lang : 'EN'
    },
    ar : {
        mainTitle : 'كلية الزراعة',
        subTitle : 'جامعة دمنهور',
        login : 'تسجيل الدخول',
        lang : 'ع'
    }
};

/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close');

// MENU SHOW

// Validate if exist

if(navToggle){
    
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
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
navLink.forEach(n => {
    n.addEventListener('click',linkAction)
    
});


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

if(languages === 'en'){
    gsap.from('.home__image-4',1.2,{opacity:0,x:200,delay: 1.3});
}else{
    gsap.from('.home__image-4',1.2,{opacity:0,x:-200,delay: 1.3});
}









/*=============== CHANGE LANGUAGE ===============*/


// let images = document.querySelectorAll('.home__images img')
// let bird1 = document.querySelector('.home__bird-1')
// let bird2 = document.querySelector('.home__bird-2')
const langTrigger = document.getElementById('langTrigger')
// localStorage.clear();

// var  lg = document.getElementsByTagName('link')[0]



const setLanguage = (languages) => {
    const elements = document.querySelectorAll("[data-i18n]");
    
    elements.forEach((element) => {
      const translationKey = element.getAttribute("data-i18n");
      element.textContent = trans[languages][translationKey];
    });

  };
  
  setLanguage(languages);

//  document.addEventListener("DOMContentLoaded", () => {
//     const language = localStorage.getItem("lang") || "en"; // اذا لم تكن اللغة متوفرة استخدم الانجليزية
//     setLanguage(language);
//   });

langTrigger.addEventListener('click', () => {

    if(localStorage.getItem('lang') === 'en'){

        localStorage.setItem('lang','ar')
       // document.styleSheets[1].disabled = false
        
    }
    else{
        localStorage.setItem('lang','en')
        //document.styleSheets[1].disabled = true
        
    }
    //setLanguage(localStorage.getItem('lang'));
    location.reload()
    console.log(localStorage.getItem('lang'));

})

