new Swiper('.testimonials-slider-container',{
    navigation:{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    breakpoints:{
        320:{
            slidesPerView:1,
        },
        800:{
            slidesPerView:2,
        },
        1200:{
            slidesPerView:3,
        },
    }

});
let burger = document.querySelector('.header-burger');
let menu = document.querySelector('.header-menu')
burger.addEventListener('click',function(){
    menu.classList.toggle('active');
})

// Валидация
function validate() {
    let userName = document.getElementById("name");
    let phone = document.getElementById("phone");
    let email = document.getElementById("email");
    let checkbox = document.querySelector('input[type=checkbox]');    
    let error = document.querySelector('.popup-error');

    if(!userName.value) {
        userName.style.border = "2px solid #D71E2C";
        return false;
    }
    if(!checkbox.checked){
        error.style.display = 'block';
        return false;
    }
    if(!phone.value) {
        phone.style.border = "2px solid #D71E2C";
        return false;
    }

    if(!email.value) {
        email.style.border = "2px solid #D71E2C";
        return false;
    }


    return true;

}
let openPopup = document.querySelector('.open-popup');
let popup = document.querySelector('.popup');
let popupClose = document.querySelector('.popup-close');
openPopup.addEventListener('click',function(e){
    e.preventDefault();
    popup.style.display = 'flex';
})
popupClose.addEventListener('click',function(){
    popup.style.display = 'none';
})
window.addEventListener('click',function(e){
    if(e.target == popup){
        popup.style.display = 'none';
    }
})
// Phone mask 
$("#phone").mask("+7 (999) 999-99-99");

// Popup
$('.popup-gallery').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image'
    // other options
  });