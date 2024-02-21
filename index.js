const form = document.querySelector('form');
const cardOne = document.querySelector(".container");
const cardTwo = document.querySelector(".sub");
const emailInput = document.querySelector('#email');
const errorText = document.querySelector('#Valid');
const returnBtn = document.querySelector('#return');
const input = document.querySelector('input')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let error = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let email = emailInput.value.trim();
    if (email === error || email === '') {
        errorText.innerHTML = 'Valid email required';
        errorText.style.color = 'hsl(4, 100%, 67%)';
        input.style.border = '1px solid hsl(4, 100%, 67%)';
        input.style.backgroundColor = 'hsl(4, 100%, 89%)';
        emailInput.setAttribute('placeholder', 'ash#Zorocompany.com');
    }
    else {
        cardOne.classList.add('hide');
        cardTwo.classList.remove('hide');
    }
});

returnBtn.addEventListener('click', function () {
    cardTwo.classList.add('hide');
    cardOne.classList.remove('hide');
    email.value = '';
    errorText.innerHTML = '';
    input.style.border = '';
    input.style.backgroundColor = '';
});