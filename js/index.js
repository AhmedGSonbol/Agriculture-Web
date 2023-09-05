var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });   

 

  
 
 //   Js code to Start Count
 let nums = document.querySelectorAll(".nums .num");
 let section = document.querySelector(".three");
 let started = false; 
 
 window.onscroll = function () {
   if (window.scrollY +200 >= section.offsetTop -100) {
     if (!started) {
       nums.forEach((num) => startCount(num));
     }
     started = true;
   }
 };
 
 function startCount(el) {
   let goal = el.dataset.goal;
   let count = setInterval(() => {
     el.textContent++;
     if (el.textContent == goal) {
       clearInterval(count);
     }
   }, 2000 / goal);
 };



let list = document.querySelectorAll('.list');
let itemBox = document.querySelectorAll('.itemBox');

for(let i = 0; i<list.length; i++){
    list[i].addEventListener('click', function(){
        for(let j = 0; j<list.length; j++){
            list[j].classList.remove('active');
        }
        this.classList.add('active');

        let dataFilter = this.getAttribute('data-filter');

        for( let k = 0; k<itemBox.length; k++){
            itemBox[k].classList.remove('active');
            itemBox[k].classList.add('hide');

            if(itemBox[k].getAttribute('data-item') == dataFilter || dataFilter == "all"){
                itemBox[k].classList.remove('hide');
                itemBox[k].classList.add('active');
            }
        }

    });
};








var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 40,
  
  loop: true,
  centerSlide:'true',
  fade:'true',
  
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  dynamicBullets:true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

 breakpoints:{
 0:{
 slidesPerView:1,
 spaceBetween:40,
 },

600:{
 slidesPerView:2,
 spaceBetween:40,


 },



 992:{
 slidesPerView:3,
 spaceBetween:40,


},


},







});






  let btn = document.getElementById('indecator2');
  window.onscroll = function(){
    if(scrollY >= 100){
    btn.style.display = 'block';
    } else {
    btn.style.display = 'none';
    }
  }
  btn.onclick = function(){
    scroll({
    left: 0,
    top: 0,
    behavior: "smooth"
    })
  }