const panels = document.querySelectorAll('.panel');

const removeActiveClasses = (arr) => {
    arr.forEach(el => {
        el.classList.remove('active')
    })
}

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses(panels);
        panel.classList.add('active')
    })
})
