window.onload = () => {

    let recoveryLocalStorage = JSON.parse(localStorage.getItem('colorPalette'));
    let recoverBoardSize = localStorage.getItem('pixelBoard');
    let colorOne = document.querySelector('.one');
    let colorTwo = document.querySelector('.two');
    let colorThree = document.querySelector('.three');
    let colorBlack = document.querySelector('.black');
    let pixelBoard = document.getElementById('pixel-board');

    if (recoveryLocalStorage) {
        colorOne.style.backgroundColor = recoveryLocalStorage[0];
        colorTwo.style.backgroundColor = recoveryLocalStorage[1];
        colorThree.style.backgroundColor = recoveryLocalStorage[2];
    };

    if (recoverBoardSize) {
        pixelBoard.innerHTML = recoverBoardSize;
    };

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

    const colors = document.getElementsByClassName('color');
    for (let color of colors) {
        color.addEventListener('click', (selectColor));
    };

    document.getElementById('pixel-board').addEventListener('click', (event) => {
        const selected = document.querySelector('.selected');
        event.target.style.backgroundColor = selected.style.backgroundColor;
        let pixelBoard = document.getElementById('pixel-board');
        localStorage.setItem('pixelBoard', pixelBoard.innerHTML);
    });

    document.getElementById('clear-board').addEventListener('click', () => {
        let pixel = document.querySelectorAll('.pixel');
        for (let index = 0; index < pixel.length; index += 1) {
            pixel[index].style.backgroundColor = 'white';
        }
    });

    document.getElementById('generate-board').addEventListener('click', () => {
        let boardSize = document.getElementById('board-size').value;
        localStorage.setItem('boardSize', boardSize);
        if (boardSize < 5 || boardSize > 50) {
            alert("Board inválido!");
        };

        if (boardSize < 5) {
            pixelBoard.innerHTML = '';
            for (let index = 0; index < 5; index += 1) {
                let createArt = document.createElement('article');
                pixelBoard.appendChild(createArt);
                for (let idx = 0; idx < 5; idx += 1) {
                    let createDiv = document.createElement('div');
                    createDiv.classList.add('pixel');
                    createArt.appendChild(createDiv);
                }
            }
        }

        if (boardSize > 50) {
            pixelBoard.innerHTML = '';
            for (let index = 0; index < 50; index += 1) {
                let createArt = document.createElement('article');
                pixelBoard.appendChild(createArt);
                for (let idx = 0; idx < 50; idx += 1) {
                    let createDiv = document.createElement('div');
                    createDiv.classList.add('pixel');
                    createArt.appendChild(createDiv);
                }
            }
        }

        if (boardSize >= 5 && boardSize <= 50) {
            pixelBoard.innerHTML = '';

            let createDiv = document.createElement('div');
            createDiv.classList.add('pixel');

            for (let index = 0; index < boardSize; index += 1) {
                let createArt = document.createElement('article');
                pixelBoard.appendChild(createArt);
                for (let idx = 0; idx < boardSize; idx += 1) {
                    let createDiv = document.createElement('div');
                    createDiv.classList.add('pixel');
                    createArt.appendChild(createDiv);
                }
            };
        };
        localStorage.setItem('pixelBoard', pixelBoard.innerHTML);
    });
};