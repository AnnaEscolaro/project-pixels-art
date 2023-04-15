window.onload = () => {

    let recoveryLocalStorage = JSON.parse(localStorage.getItem('colorPalette'));

    let colorOne = document.querySelector('.one');
    let colorTwo = document.querySelector('.two');
    let colorThree = document.querySelector('.three');

    if (recoveryLocalStorage) {
        colorOne.style.backgroundColor = recoveryLocalStorage[0];
        colorTwo.style.backgroundColor = recoveryLocalStorage[1];
        colorThree.style.backgroundColor = recoveryLocalStorage[2];
    };

    const firstSelectedColor = () => {
        let colorBlack = document.querySelector('.black');
        colorBlack.classList.add('selected');
    }
    firstSelectedColor();

    const selectColor = (event) => {
        let selectedColors = document.querySelectorAll('.selected');
        for (let el of selectedColors) {
            el.classList.remove('selected');
        }
        event.target.classList.add('selected');
    }

    function randomColor() {
        let numLetters = '0123456789ABCDEF';
        let color = '#';
        for (let index = 0; index < 6; index += 1) {
            color += numLetters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    document.getElementById('button-random-color').addEventListener('click', () => {
        let colors = [randomColor(), randomColor(), randomColor()];
        colorOne.style.backgroundColor = colors[0];
        colorTwo.style.backgroundColor = colors[1];
        colorThree.style.backgroundColor = colors[2];
        localStorage.setItem('colorPalette', JSON.stringify(colors));
    });

    const colors = document.getElementsByClassName('color');
    for (let color of colors) {
        color.addEventListener('click', (selectColor));
    };

    // const changeColors = document.querySelectorAll('.color');
    // for (let item of changeColors) {
    //     item.addEventListener('click', (event) => {
    //         const selected = document.querySelector('.selected');
    //         selected.style.backgroundColor = 
    //     })
    // }
};