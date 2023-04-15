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
};