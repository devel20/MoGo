// burger **************************************************
document.getElementById("header__burger").onclick = function() {
  open()
};

function open() {
  document.getElementById("header__burger").classList.toggle("active");
  document.getElementById("header__menu").classList.toggle("active");
  document.getElementById("body").classList.toggle("lock");
}

// accordeon ***********************************************

let panelItem = document.querySelectorAll('.accordeon__header'),
  active = document.getElementsByClassName('panel-active');

  Array.from(panelItem).forEach(function(item, i, panelItem) {
  item.addEventListener('click', function(e) {
  if (active.length > 0 && active[0] !== this) // если есть активный элемент, и это не тот по которому кликнули
  active[0].classList.remove('panel-active'); // убрать класс panel-active
  // изменить состояние класса panel-active на текущем элементе: добавить если не было, убрать если было.
  this.classList.toggle('panel-active');
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












