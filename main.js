const max_no_form = document.getElementById("setup")
const guess_form = document.getElementById("guess")

const max_no = max_no_form.querySelector("input")
const play_button = guess_form.querySelector('button')
const user_guess = guess_form.querySelector('input')

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function play_game(event) {
    event.preventDefault();
    const old_results = document.querySelectorAll('h2')
    console.log(old_results);
    if(old_results.length > 0){
        old_results.forEach(element => {
            element.remove();
        });
    }
    const answer = getRandomInt(max_no.value);
    const h2 = document.createElement('h2');
    h2.innerText = `You guessed: ${user_guess.value}, the answer was: ${answer}!`
    const result = document.createElement('h2');
    if(answer === parseInt(user_guess.value)){
        result.innerText = "YOU WON!"
    } else {
        result.innerText = "YOU LOST!"
    }
    document.body.appendChild(h2);
    document.body.appendChild(result);
}

guess_form.addEventListener("submit", play_game);