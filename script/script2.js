document.addEventListener('DOMContentLoaded', function() {
    var slider = document.querySelector('.banner_block');
    var sliderItems = document.querySelectorAll('.banner_img');
    var prevBtn = document.querySelector('.prev-btn');
    var nextBtn = document.querySelector('.next-btn');
    var currentSlide = 0;
    var interval = setInterval(nextSlide, 5000); // переключение каждые 5 секунд
  
    function nextSlide() {
        sliderItems[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % sliderItems.length;
        sliderItems[currentSlide].classList.add('active');
      }
    
      function prevSlide() {
        sliderItems[currentSlide].classList.remove('active');
        currentSlide = (currentSlide - 1 + sliderItems.length) % sliderItems.length;
        sliderItems[currentSlide].classList.add('active');
      }
    
      prevBtn.addEventListener('click', prevSlide);
      nextBtn.addEventListener('click', nextSlide);
    
      sliderItems[currentSlide].classList.add('active');

      console.log(sliderItems);
  });
  


