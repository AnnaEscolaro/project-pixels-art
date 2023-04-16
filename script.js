window.onload = () => {

    let recoveryLocalStorage = JSON.parse(localStorage.getItem('colorPalette'));
    let recoverPixels = JSON.parse(localStorage.getItem('pixelBoard'));
    let colorOne = document.querySelector('.one');
    let colorTwo = document.querySelector('.two');
    let colorThree = document.querySelector('.three');
    let colorBlack = document.querySelector('.black');

    if (recoveryLocalStorage) {
        colorOne.style.backgroundColor = recoveryLocalStorage[0];
        colorTwo.style.backgroundColor = recoveryLocalStorage[1];
        colorThree.style.backgroundColor = recoveryLocalStorage[2];
    };

    if (recoverPixels) {

    }


    const firstSelectedColor = () => {
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

    document.getElementById('pixel-board').addEventListener('click', (event) => {
        const selected = document.querySelector('.selected');
        let coloredPixels = [];
        // event.target.style.backgroundColor = selected.style.backgroundColor;
        coloredPixels.push(event.target.style.backgroundColor = selected.style.backgroundColor);
        localStorage.setItem('pixelBoard', JSON.stringify(coloredPixels));
    })

    document.getElementById('clear-board').addEventListener('click', () => {
        let pixel = document.querySelectorAll('.pixel');
        for (let index = 0; index < pixel.length; index += 1) {
            pixel[index].style.backgroundColor = 'white';
        }
    })
};