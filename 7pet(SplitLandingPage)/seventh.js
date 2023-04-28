const leftSplit = document.querySelector('.left')
const rightSplit = document.querySelector('.right')

leftSplit.addEventListener('mouseover', () => {
    leftSplit.style.width = '90%';
    rightSplit.style.width = '10%';
    rightSplit.classList.add('hided');
})

leftSplit.addEventListener('mouseleave', () => {
    leftSplit.style.width = '50%';
    rightSplit.style.width = '50%';
    rightSplit.classList.remove('hided');
})

rightSplit.addEventListener('mouseover', () => {
    rightSplit.style.width = '90%';
    leftSplit.style.width = '10%';
    leftSplit.classList.add('hided');

})

rightSplit.addEventListener('mouseleave', () => {
    rightSplit.style.width = '50%';
    leftSplit.style.width = '50%';
    leftSplit.classList.remove('hided');

})
