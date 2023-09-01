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
   if (window.scrollY  >= section.offsetTop -100) {
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
 }

