const addButton = document.getElementById('add');
const minusButton = document.getElementById('minus');
const dish = document.querySelector('.dish-icon_block');
const buttonShowBread = document.getElementById('add-bread');
const breadBlock = document.getElementById('bread');

const countDish = document.querySelector('#count');
let number = parseInt(countDish.textContent);
function incrementNumber(){
    number++;
    console.log(number);
    countDish.textContent = number;
}

function discrementNumber(){
    if(number < 2){
        dish.style.display = 'none';
    }
    number--;
    console.log(number);
    countDish.textContent = number;
}

addButton.addEventListener('click', incrementNumber);
minusButton.addEventListener('click', discrementNumber);

buttonShowBread.addEventListener('click', function(){
    breadBlock.classList.toggle('visible');
    if(breadBlock.classList.contains('visible')){
        buttonShowBread.classList.toggle('active');
    }
    else{
        buttonShowBread.classList.remove('active');
    }
});
