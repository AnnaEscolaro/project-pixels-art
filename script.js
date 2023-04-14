window.onload = () => {

    const onLoad = localStorage.getItem('colorPalette');

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

    document.getElementById('button-random-color').addEventListener('click', () => {
        colorOne.style.backgroundColor = randomColor();
        colorTwo.style.backgroundColor = randomColor();
        colorThree.style.backgroundColor = randomColor();
    });

    let colors = [colorOne, colorTwo, colorThree];
    localStorage.setItem('colorPalette', colors);
};