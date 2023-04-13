const addButton = document.getElementById('add');
const minusButton = document.getElementById('minus');

const countDish = document.querySelector('#count');
let number = parseInt(countDish.textContent);
function incrementNumber(){
    number++;
    console.log(number);
    countDish.textContent = number;
}

function discrementNumber(){
    number--;
    console.log(number);
    countDish.textContent = number;
}

addButton.addEventListener('click', incrementNumber);
minusButton.addEventListener('click', discrementNumber);
