
// ---- native JS

let burgerBtn = document.querySelector('.burger__btn');
let burgerMenu = document.querySelector('.header-menu');
let header = document.querySelector('.header');

burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('active');
    burgerMenu.classList.toggle('active');
    header.classList.toggle('active');

    document.querySelector('body').classList.toggle('lock');
});

const swiper = new Swiper('.swiper', {
    enabled: true,
    slidesPerView: 1,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        992: {
            enabled: false,
        }
    }
});

const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
            } else {
                if (!animItem.classList.contains('_anim-no-hide')) {
                    animItem.classList.remove('_active');
                }
            }
        }
    }

    function offset(el) {
        const rect = el.getBoundingClientRect(), 
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
    
    setTimeout(() => {
        animOnScroll();
    }, 00);
}

if (document.documentElement.clientWidth > 992 && document.querySelector('.wrapper').classList.contains('parallax')) { // disable script if resolution less than 1000px 

  let bg01 = document.querySelector('.parallax__item-01');
  window.addEventListener('mousemove', function(e) {
      let x = e.clientX / window.innerWidth;
      let y = e.clientY / window.innerHeight;  
    bg01.style.transform = 'translate(-' + x * 16 + 'px, -' + y * 16 + 'px)';
  });
  let bg02 = document.querySelector('.parallax__item-02');
  window.addEventListener('mousemove', function(e) {
      let x = e.clientX / window.innerWidth;
      let y = e.clientY / window.innerHeight;  
    bg02.style.transform = 'translate(+' + x * 16 + 'px, -' + y * 16 + 'px)';
  });
  let bg03 = document.querySelector('.parallax__item-03');
  window.addEventListener('mousemove', function(e) {
      let x = e.clientX / window.innerWidth;
      let y = e.clientY / window.innerHeight;  
    bg03.style.transform = 'translate(+' + x * 16 + 'px, -' + y * 16 + 'px)';
  });
  let bg04 = document.querySelector('.parallax__item-04');
  window.addEventListener('mousemove', function(e) {
      let x = e.clientX / window.innerWidth;
      let y = e.clientY / window.innerHeight;  
    bg04.style.transform = 'translate(-' + x * 10 + 'px, -' + y * 10 + 'px)';
  });

}

// ---- JQuery



function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    
    testWebP(function (support) {
    
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
});