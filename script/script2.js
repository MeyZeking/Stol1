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

  document.addEventListener('DOMContentLoaded', function() {
    const anchors = document.querySelectorAll('a[href*="#"]');
    for (let anchor of anchors) {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const blockID = anchor.getAttribute('href').substr(1);
        const headerHeight = document.querySelector('header').offsetHeight;
        const scrollToBlock = document.getElementById(blockID).getBoundingClientRect().top + window.pageYOffset - headerHeight;
        window.scrollTo({
          top: scrollToBlock,
          behavior: 'smooth'
        });
      });
    }
  });

  

document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal');
    const closeButton = document.querySelector('.close');
    const loginButton = document.querySelector('.login-button');
    console.log(loginButton);
  
    // Открываем модальное окно при клике на кнопку "Войти"
    loginButton.addEventListener('click', function() {
      modal.style.display = 'block';
    });
  
    // Закрываем модальное окно при клике на кнопку "Закрыть"
    closeButton.addEventListener('click', function() {
      modal.style.display = 'none';
    });
  
    // Закрываем модальное окно при клике за его пределами
    window.addEventListener('click', function(event) {
      if (event.target == modal) {
        modal.style.display = 'none';
      }
    });
  });
