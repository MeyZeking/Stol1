document.addEventListener('DOMContentLoaded', function() {
    var interval = setInterval(nextSlide, 5000); // переключение каждые 5 секунд
  
    function nextSlide() {
      var currentSlide = document.querySelector('.text_banner.active');
      var nextSlide = currentSlide.nextElementSibling;
  
      if (!nextSlide) {
        nextSlide = document.querySelector('.text_banner:first-child');
      }
  
      currentSlide.classList.remove('active');
      nextSlide.classList.add('active');

    }
  });

document.addEventListener('DOMContentLoaded', function() {
    var interval = setInterval(nextMenu, 5000); // переключение каждые 5 секунд
  
    function nextMenu() {
      var currentMenu = document.querySelector('.banner_block-absolute.active');
      var nextMenu = currentMenu.nextElementSibling;
  
      if (!nextMenu) {
        nextMenu = document.querySelector('.banner_block-absolute:first-child');
      }
  
      currentMenu.classList.remove('active');
      nextMenu.classList.add('active');

    }
  });
  
  const menu = document.querySelector('.header_nav');
 const burger = document.querySelector('.burger');
  burger.addEventListener('click', function() {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
  });

