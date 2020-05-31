$(function () {
  let mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 20,
    breakpoints: {
      320: {
        slidesPerView: 'auto',
        spaceBetween: 10,
        slidesOffsetBefore: 10,
      },
      768: {
        slidesPerView: 'auto',
        spaceBetween: 70,
        slidesOffsetBefore: 30,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
    	el: '.swiper-pagination',
    	type: 'bullets',
    	clickable: true,
    }
  });

  function smoothScroll(block) {
    $(block).on("click", function(e){
      e.preventDefault();
      var anchor = $(this).attr('href');
      $('html, body').stop().animate({
        scrollTop: $(anchor).offset().top
        }, 1200);
    });
  }

  smoothScroll('a.header-link-mobile');
  smoothScroll('a.header-link');
  smoothScroll('a.footer-link');

  $('.container__header__button').on('click', function(){
    $('.menu').fadeIn();
  });

  $('.header-link, .header-link-mobile, .menu__container-button__exitButtom').on('click', function(){
    $('.menu').fadeOut();
  });

  $('.container__header__contacts__button, .container__footer-block__props__button, .container__header__button-mobile').on('click', function(){
    $('.popup').fadeIn();
    $('.popup').css('display', 'flex');
  });

  $('.popup__form-container__container-button__button-mobile').on('click', function(){
    $('.popup').fadeOut();
  });

  $('.popup-easy__form-container__container-button__button-mobile').on('click', function(){
    $('.popup-easy').fadeOut();
  });

  $('.order').on('click', function(){
    $('.popup-easy').fadeIn();
    $('.popup-easy').css('display', 'flex');
  });

  $('.popup, .popup-easy').click(function(event){
    if(event.target == this) {
      $(this).fadeOut();
    }
  });

  $('input[type="tel"]').inputmask({
    "mask": "+7 (999) 999-99-99"
  });
});