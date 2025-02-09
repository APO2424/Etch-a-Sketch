const gridContainer = document.querySelector(".grid-container");
const resetButton = document.querySelector(".reset-button");
let squareDiv="";

let i = 20;

function createGrid(numSquares){

    i = numSquares;

    gridContainer.innerHTML= '';

    for (let k=1; k<=i**2; k++) {
        squareDiv = document.createElement('div');
        squareDiv.classList.add('square-div');
        squareDiv.style.height = `${500 / i}px`;
        squareDiv.style.width = `${500 / i}px`;

        squareDiv.addEventListener('mouseover', () => {
            squareDiv.style.backgroundColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
        })

        gridContainer.appendChild(squareDiv);
    }
}


    
resetButton.addEventListener('click', () => {
        gridContainer.style.backgroundColor = 'grey';});


createGrid(20);


