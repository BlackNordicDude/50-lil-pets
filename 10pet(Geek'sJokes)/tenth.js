const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

generationJoke() 

/* function generationJoke() {
    const config = {
        headers: {
            Accept: 'application/json'
        }
    }

    fetch('https://geek-jokes.sameerkumar.website/api', config)
    .then(res => res.json())
    .then(data => {
        jokeEl.innerText = data;
    })
} */

async function generationJoke() {
    const res = await fetch('https://geek-jokes.sameerkumar.website/api?format=json');
    const data = await res.json()
    jokeEl.innerText = data.joke
}

jokeBtn.addEventListener('click', generationJoke)