// burger JQ **************************************************
jQuery(document).ready(function($) {
  $('.header__burger').click(function() {
  $('.header__burger, .header__menu').toggleClass('active');
  $('body').toggleClass('lock');
  });
let link = $('a[href]');
    $(link).click(function(){
    $('.header__burger, .header__menu').removeClass('active');
    $('body').removeClass('lock');
  });
});


// плвный переход к якорю ***************************************
$(document).ready(function(){
$(".header__menu").on("click","a", function (event) {
//отменяем стандартную обработку нажатия по ссылке
event.preventDefault();

//забираем идентификатор бока с атрибута href
var id = $(this).attr('href'),

//узнаем высоту от начала страницы до блока на который ссылается якорь
top = $(id).offset().top;

//анимируем переход на расстояние - top за 1000 мс
$('body,html').animate({scrollTop: top}, 1000);
});
});


// scroll Top ***************************************************
jQuery(document).ready(function($) {
$(window).scroll(function() {
        if ($(this).scrollTop() > 400) {
            $('.scroll-top').css({opcity: 1}).fadeIn('slow');
        } else { $('.scroll-top').stop(true, false).fadeOut('fast'); }
    });
    $('.scroll-top').click(function() {
        $('html, body').stop().animate({scrollTop : 0}, 300);
    });
});

// accordeon jQuery ***********************************************

$(document).ready(function(){
  $('.accordeon__content:first').slideDown(); // откривает первое меню 
  $('.accordeon__header').on('click', function(){
    if($(this).hasClass('active')){
      $(this).removeClass('active');
      $(this).siblings('.accordeon__content').slideUp(400);
    }else{
      $('.accordeon__header').removeClass('active');
      $(this).addClass('active');
      $('.accordeon__content').slideUp(400);
      $(this).siblings('.accordeon__content').slideDown(400);
      }
  });
});

// slider_slick *************************************************
jQuery(document).ready(function($) {
  $('.slider').slick({
    arrows:true,
    dots:false,
    adaptiveHeight:true,
    slidesToShow:1,         
    slidesToScroll:1,    
    speed:1000,             
    easing:'ease',  
    infinite:true,         
    draggable:true,       
    swipe: true,      
    touchMove:true,
    responsive:[
      {
        breakpoint: 768,
        settings: {
          slidesToShow:1
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow:1
        }
      }
    ]
  });
});


// ******************************************************










