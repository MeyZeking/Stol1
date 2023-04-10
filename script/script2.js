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
    const closeButton = document.getElementById('close-autorization');
    const loginButton = document.querySelector('.login-button');


    const passwordInp = modal.querySelector('#password');
    const showHideBtn = modal.querySelector('#show-hide');

  

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

    
    showHideBtn.addEventListener('click', () => {
 
      if(passwordInp.getAttribute('type') === 'password') {
        passwordInp.setAttribute('type', 'text');
        console.log(passwordInp.type);
      }
      else{
        passwordInp.setAttribute('type', 'password') == 'password';
      }
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    // Получаем модальные окна
    const modalAutorization = document.getElementById('modal');
    const modalRegistration = document.getElementById('modal_registration');
    const closeButton = document.getElementById('close-registration');
  
    // Получаем кнопку для открытия модального окна 2
    const buttonRegistration = document.getElementById('registration');
    // Обработчик клика на кнопке
    buttonRegistration.onclick = function() {
      // Скрываем модальное окно 1
      modalAutorization.style.display = "none";
      // Открываем модальное окно 2
      modalRegistration.style.display = "block";
    }
  
    // Получаем кнопку для закрытия модального окна 2
    // Обработчик клика на кнопке закрытия модального окна 2
    closeButton.addEventListener('click', function() {
      modalRegistration.style.display = "none";
    });
  
    // Обработчик клика на модальном окне 2
    window.addEventListener('click', function(event) {
      if (event.target == modalRegistration) {
        modalRegistration.style.display = 'none';
      }
    });
  });

  
  
const checkboxes = document.querySelectorAll('.role_checkbox');
// Добавляем обработчик клика на каждый чекбокс
checkboxes.forEach(function(checkbox) {
  checkbox.addEventListener('click', function() {
    // Если текущий чекбокс уже выбран, то снимаем выбор со всех остальных чекбоксов
    if (this.checked) {
      checkboxes.forEach(function(otherCheckbox) {
        if (otherCheckbox != checkbox) {
          otherCheckbox.checked = false;
        }
      });
    }
  });
});

const btnReturnAutorization = document.getElementById('returnAutorization');
btnReturnAutorization.addEventListener('click', () => {
  const modalAutorization = document.getElementById('modal');
  const modalRegistration = document.getElementById('modal_registration');
  modalAutorization.style.display = "block";
  // Открываем модальное окно 2
  modalRegistration.style.display = "none";
});


document.addEventListener('DOMContentLoaded', () => {
  const btnRegistration = document.getElementById('registrationConfirm');
  const closeButton = document.querySelector('#close-verification');
  const modalRegistration = document.getElementById('modal_registration');
  const modalVerification = document.getElementById('modalVerification');
  btnRegistration.onclick = function() {
    // Скрываем модальное окно 1
    modalRegistration.style.display = "none";
    // Открываем модальное окно 2
    modalVerification.style.display = "block";
  }

  closeButton.addEventListener('click', () => {
    modalVerification.style.display = "none";
  });

});

const verificztionAccount = document.getElementById('verificztionAccount');
verificztionAccount.addEventListener('click', () => {
  const modalVerification = document.getElementById('modalVerification');
  modalVerification.style.display = "none";
  alert("Вы успешно зарегистрировались!");
})





