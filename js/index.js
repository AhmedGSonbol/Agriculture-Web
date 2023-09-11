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



var homeswiper = new Swiper(".myHomeSwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  centeredSlides: true,
  // autoplay: {
  //   delay: 3500,
  //   disableOnInteraction: false
  // },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },


  on: {
    autoplayTimeLeft(s, time, progress) {
      // progressCircle.style.setProperty("--progress", 1 - progress);
      // progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    }
  }

});





//   Js code to Start Count
let nums = document.querySelectorAll(".nums .num");
let section = document.querySelector(".three");
let started = false;

window.onscroll = function () {
  if (window.scrollY + 200 >= section.offsetTop - 100) {
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

var imgList = [];

for (let i = 0; i < list.length; i++) {
  list[i].addEventListener('click', function () {

    imgList = [];

    for (let j = 0; j < list.length; j++) {
      list[j].classList.remove('active');
    }
    this.classList.add('active');


    for (let k = 0; k < itemBox.length; k++) {
      // itemBox[k].classList.remove('active');
      itemBox[k].classList.remove('show-itemBox');

      let dataFilter = this.getAttribute('data-filter');


      if (itemBox[k].getAttribute('data-item') == dataFilter) {
        itemBox[k].classList.add('show-itemBox');
        // itemBox[k].classList.add('active');




        imgList.push(itemBox[k].getElementsByTagName('img')[0])
      }
    }

    imageClicked(imgList);

  });
};


window.addEventListener('load', () => {


  list.forEach(l => {
    if (l.classList.contains('active')) {

      let attr = l.getAttribute('data-filter');


      itemBox.forEach(item => {
        item.classList.remove('show-itemBox');
        // item.classList.remove('active');
        // item.classList.add('hide');




        if (item.getAttribute('data-item') == attr) {

          item.classList.add('show-itemBox');

          // item.classList.remove('hide');
          // item.classList.add('active');

          imgList.push(item.getElementsByTagName('img')[0])
        }


      })

    }

  })

  imageClicked(imgList);

})




var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 40,

  loop: true,
  centerSlide: 'true',
  fade: 'true',

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 40,
    },

    600: {
      slidesPerView: 2,
      spaceBetween: 40,


    },



    992: {
      slidesPerView: 3,
      spaceBetween: 40,


    },


  },

});



// var imgList = Array.from(document.querySelectorAll('.itemBox img'));
var lightbox = document.getElementById('lightbox');
var lightBoxItem = document.getElementById('lightbox-item');
var currentSlideIndex;
var nextBtn = document.getElementById('nextBtn');
var prevBtn = document.getElementById('prevBtn');
var closeBtn = document.getElementById('closeBtn');

function imageClicked(images) {
  for (var i = 0; i < images.length; i++) {
    images[i].addEventListener('click', function (e) {
      lightbox.style.display = 'flex';
      var imgSrc = e.target.getAttribute('src');
      currentSlideIndex = images.indexOf(e.target);
      lightBoxItem.style.backgroundImage = `url(${imgSrc})`

    })
  }
}


function nextSlide() {
  currentSlideIndex++;
  if (currentSlideIndex > imgList.length - 1) {
    currentSlideIndex = 0;
  }
  var imgSrc = imgList[currentSlideIndex].getAttribute('src')
  lightBoxItem.style.backgroundImage = `url(${imgSrc})`
}


function prevSlide() {
  currentSlideIndex--;
  if (currentSlideIndex < 0) {
    currentSlideIndex = imgList.length - 1;
  }
  var imgSrc = imgList[currentSlideIndex].getAttribute('src')
  lightBoxItem.style.backgroundImage = `url(${imgSrc})`
}


function closeSlide() {
  lightbox.style.display = 'none';
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);
closeBtn.addEventListener('click', closeSlide);


// indecator

const goTopBtn = document.querySelector('.go-top-btn');

window.addEventListener('scroll', checkHeight);

function checkHeight() {
  if (window.scrollY > 200) {
    goTopBtn.style.display = 'flex';
  } else {
    goTopBtn.style.display = 'none';
  }
}

goTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})