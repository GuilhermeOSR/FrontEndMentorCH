const screenRating = document.querySelector(".screen-rating");
const screenThanks = document.querySelector(".screen-thanks");
const btnSubmit = document.getElementById('btn-submit');
const rateAgain = document.getElementById("rate-again");
const rating = document.getElementById("rating");
const rates = document.querySelectorAll("a");

let checked = false;

btnSubmit.addEventListener("click", (rate) => {
    if(checked === false) {
       alert("Please, what is your rating?")
    }
    else {
    screenThanks.classList.remove('hide');
    screenRating.classList.add('hide');
    }
})

rateAgain.addEventListener('click', () => {
    screenRating.classList.remove('hide');
    screenThanks.classList.add('hide');
})

rates.forEach((rate) => {
    rate.addEventListener("click", (event) => {
        event.preventDefault();
        rating.innerHTML = rate.innerHTML;
        rates.forEach((otherRate) => {
            if(otherRate !== rate) {
                otherRate.style.backgroundColor = 'hsl(213, 20%, 24%)';
                otherRate.style.color = "hsl(216, 12%, 54%)";
            }
        });
        rate.style.backgroundColor = 'hsl(216, 12%, 54%)';
        rate.style.color = "white";
        checked = true;

    })

    
})


/* contagem */




