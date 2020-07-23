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

// carusel*************************************************
  window.addEventListener('load', () => {
  // buttons
  const left = document.querySelector('.carusel__butn_left')  
  const right = document.querySelector('.carusel__butn_right')

  // carusel
  const slider = document.querySelector('.carusel__slider')
  const sliderItem = document.querySelectorAll('.carusel__inner')

  let counter = 0;
  let stepSize = sliderItem[0].clientWidth
    
  slider.style.transform = 'translateX(' + `${-stepSize * counter}px)`;

  right.addEventListener('click', () => {
    counter >= sliderItem.length - 1 ? (counter = -1) :null;
    slider.classList.add('transformAnimation')
     console.log(counter)
     console.log('item', sliderItem.length)
    counter++;
    slider.style.transform = 'translateX(' + `${-stepSize * counter}px`
  });
  left.addEventListener('click', () => {
    if (counter <= 0) counter = sliderItem.length;
    slider.classList.add('transformAnimation')
    console.log(counter)
    counter--;
    slider.style.transform = 'translateX(' + `${-stepSize * counter}px`
  });
});












