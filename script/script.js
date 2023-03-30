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