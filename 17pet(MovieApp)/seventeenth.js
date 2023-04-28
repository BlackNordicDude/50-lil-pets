const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main');
const START_URL = 'https://api.kinopoisk.dev/v1/movie?page=1&limit=10'
const NAME_SEARCH_URL = 'https://api.kinopoisk.dev/v1/movie?page=1&limit=10&name='

/* нужна функция перевода с русского в query параметр */
const options = {
    headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': 'DTW7006-B4RMDXB-KX6RZ4E-FE3182X',
      },
}

getMovies(START_URL)

function getMovies(url) {
    fetch(url, options)
    .then(res => res.json())
    .then(data => {
        showMovies(data.docs)
    })
}

function showMovies(movies) {
    main.innerHTML = ''
    movies.forEach((movie) => {
        const {name, description, poster, rating} = movie;

        const movieEl = document.createElement('div')
        movieEl.classList.add('movie')
        movieEl.innerHTML = `
            <img src=${poster.url}>
            <div class="movie-info">
                <h3>${name}</h3>
                <span class=${getClassByRate(rating.kp)}>${rating.kp}</span>
            </div>
            <div class="overview">
                <h3>${name}</h3>
                ${description}
            </div>
        `
        main.appendChild(movieEl)
    })
}

function getClassByRate(rate) {
    if (rate >= 8) {
        return 'green'
    } else if (rate >= 5) {
        return 'orange'
    } else return 'red'
}
const movieCard = document.querySelector('.movie')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const searchText = search.value;

    if (searchText && searchText !== '') {
        getMovies(encodeURI(NAME_SEARCH_URL + searchText))

        search.value = ''
    } else {
        window.location.reload()
    }
})