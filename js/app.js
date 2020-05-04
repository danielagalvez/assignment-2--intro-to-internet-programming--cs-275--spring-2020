let button = document.querySelector('button');
let p = document.querySelector('p');
button.addEventListener(`click`, () => {
    let selected = document.querySelector('input[type= "radio"]:checked');
    p.innerHTML = selected.value;
    let userInput= prompt('Enter the amount of rice you would like to make(in fluid ounces)');
    if(selected.value != "White Rice" && userInput == 0){

        alert("Please enter in a valid number");
        location.reload();
        return false;

    }
    else if (selected.value != "White Rice" && userInput != 0)
    {

        let paragraph = document.getElementsByTagName(`p`)[1];
        let amountOfRice = parseFloat(userInput);
        let Water = parseFloat(userInput).toFixed(2)*(1.6);
        let amountOfWater = Water.toFixed(2);
        let minute = parseFloat(userInput).toFixed(2)*(2.5);
        let minuteToCook = minute.toFixed(2);
        let minuteToSit = parseFloat(userInput)*(.5);
        let oil = parseFloat(userInput)*(0.05);
        let amountOfOil = oil.toFixed(2);
        paragraph.textContent = 'For slightly al dente rice:\n' +
            'Combine ' + amountOfRice + ' fluid ounces of rice with ' + amountOfWater + ' fluid ounces of water or broth and ' + amountOfOil + ' ounces of olive oil. Bring to a boil and stir once to mix. Reduce heat to low, cover with a tight-fitting lid and cook for '
            + minuteToCook + ' minutes. Remove from heat and let stand for ' + minuteToSit +'  minutes. Fluff with a fork and serve.\n' +
            '\n' +
            'For softer rice:\n' +
            'Increase liquid by 4 fluid ounces and cook time by 5 minutes.\n';
        document.getElementById('white').style.display = "none";
        document.getElementById('cali').style.display = "block";

    }
    else if (selected.value != "California Rice" && userInput == 0)
    {
        alert("Please enter a valid number");
        location.reload();
        return false;

    }

    else if(selected.value != "California Rice" && userInput != 0)
    {
        let paragraph = document.getElementsByTagName(`p`)[2];
        let amountOfRice = parseFloat(userInput);
        let amountOfWater = parseFloat(userInput)*(2);
        let minute = parseFloat(userInput)*(2.25);
        let minuteToCook = minute.toFixed(2);
        let oil = parseFloat(userInput)*(0.0625);
        let amountOfOil = oil.toFixed(2);
        paragraph.textContent = 'Combine ' + amountOfRice+ ' fluid ounces of rice with ' + amountOfWater + ' fluid ounces of water and ' + amountOfOil + ' fluid ounces of olive oil. Bring to a boil, then reduce heat to the lowest setting. Cook for about ' + minuteToCook + ' minutes.';
        document.getElementById('cali').style.display = "none";
        document.getElementById('white').style.display = "block";
    }

});
