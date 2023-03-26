const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');
const i = document.querySelector('.fa-search');

const closeSearch = () => {
    btn.removeEventListener('click', openSearch)
}

const openSearch = () => {
    search.classList.add('active');
    input.focus()
    return closeSearch
}

btn.addEventListener('click', openSearch)

console.log(i, btn, search);

document.addEventListener('click', (e) => {
    if (e.target === input || e.target === i || e.target === btn) {
        /* fetching request */
    } else {
        search.classList.remove('active')
    }
})