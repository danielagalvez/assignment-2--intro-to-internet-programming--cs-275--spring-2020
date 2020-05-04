let button = document.querySelector('button');
let p = document.querySelector('p');
button.addEventListener(`click`, () => {
    let selected = document.querySelector('input[type= "radio"]:checked');
    p.innerHTML = selected.value;
    let userInput= prompt('Enter the amount of rice you would like to make(in fluid ounces)');
