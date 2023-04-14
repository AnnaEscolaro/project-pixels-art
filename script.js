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

    document.getElementById('button-random-color').addEventListener('click', () => {
        colorOne.style.backgroundColor = randomColor();
        colorTwo.style.backgroundColor = randomColor();
        colorThree.style.backgroundColor = randomColor();
    });

    // const firstColor = document.getElementsByClassName('.black');

    // let colors = document.querySelectorAll('.purple .peru .plum');
    // for (let color of colors) {
    //     color.addEventListener('click', (event) => {
    //         color = Math.floor(Math.ramdom(colors.length));
    //         if (color === 0) {
    //             const selected = document.querySelectorAll('.selected');
    //         }
    //         if (color === 1) {
    //             const selected = document.querySelectorAll('.peru');
    //         }
    //         if (color === 2) {
    //             const selected = document.querySelectorAll('.plum');
    //         }
    //     })
    // }


    // rdmColors.forEach(
    //     document.addEventListener('click', selectColor() => {
    //         Math.floor(Math.random(rdmColors.length));
    //     })
    // );



};