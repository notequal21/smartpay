
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
"use strict"

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('#form');
    form.addEventListener('submit', formSend)

    async function formSend(e) {
        e.preventDefault();

        let error = formValidate(form);
    }


    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll('._req');

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input);
            
            if (input.classList.contains('_email')) {
                if (emailTest(input)) {
                    formAddError(input);
                    erorr++;
                }
            } else if(input.getAttribute("type" === "checkbox" && input.checked === false)) {
                formAddError(input);
                erorr++;
            } else {
                if (input.value === '') {
                    formAddError(input);
                    erorr++
                }
            }
        }
    }
    function formAddError(input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }
    function formRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }
    function emailTest(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }
}); 

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