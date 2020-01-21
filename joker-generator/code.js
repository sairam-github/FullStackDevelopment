$(document).ready(on_ready);

function on_ready() {
    $('#get_joke').on('click', fetchJoke);
    fetchJoke();
}

const jokeEl = document.getElementById('joke');

console.log(joke == jokeEl);

async function fetchJoke() {
    const jokeRes = await fetch("https://icanhazdadjoke.com/", {
        headers: {
            'Accept' : 'application/json'
        }
    });

    const jokeJson = await jokeRes.json();

    joke.innerHTML = jokeJson.joke;
}