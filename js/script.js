// burger JS **************************************************
document.getElementById("header__burger").onclick = function() {
  open()
};

function open() {
  document.getElementById("header__burger").classList.toggle("active");
  document.getElementById("header__menu").classList.toggle("active");
  document.getElementById("body").classList.toggle("lock");
}

// accordeon jQuery ***********************************************
$(document).ready(function(){
$(".accordeon__header").on("click", function(){
if($(this).hasClass('active')){
 $(this).removeClass("active");
$(this).siblings('.accordeon__content').slideUp(400);
}else{

$(".accordeon__header").removeClass("active");
$(this).addClass("active");
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











