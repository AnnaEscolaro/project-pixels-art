// const selectColor = (event) => {
//     const selected = document.querySelectorAll('.selected');
//     for (let el of selected) {
//         el.classList.remove('selected');
//     }
//     event.target.classList.add('selected');
// };

window.onload = () => {

    function randomColor() {
        let numLetters = '0123456789ABCDEF';
        let color = '#';
        for (let index = 0; index < 6; index += 1) {
            color += numLetters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    let colorOne = document.querySelector('.one');
    let colorTwo = document.querySelector('.two');
    let colorThree = document.querySelector('.three');

    let colorPalete = document.getElementById('button-random-color').addEventListener('click', () => {
        colorOne.style.backgroundColor = randomColor();
        colorTwo.style.backgroundColor = randomColor();
        colorThree.style.backgroundColor = randomColor();
    });

    localStorage.setItem(colorPalete);
};