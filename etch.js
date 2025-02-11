// Enter how many total squares you would like for your grid in the 
// field box, then press enter to create your grid! Press Erase! to 
// erase your grid and start all over again.

const gridContainer = document.querySelector(".grid-container");
const resetButton = document.querySelector(".reset-button");
const device = document.querySelector(".device");

// Integer variable to hold user input.
let num; 

// Creates a grid using 'numSquares' value for each side of the square. 
function createGrid(numSquares){

    // Switched variables to not complecate for-loop
    // so only using 'i', 'k' variables.
    i = numSquares;

    // Used innerHTML to add HTML code
    gridContainer.innerHTML= '';

    // For loop that creates div's,
    // adds a class to it, of equal sides.
    for (let k=1; k<=i**2; k++) {
        const squareDiv = document.createElement('div');
        squareDiv.classList.add('square-div');
        squareDiv.style.height = `${500 / i}px`;
        squareDiv.style.width = `${500 / i}px`;

        // Event Listener using 'mouseover' to add a random background 
        // color to each square created.
        squareDiv.addEventListener('mouseover', () => {
            squareDiv.style.backgroundColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
        })

        // Adds all square divs to the gridContainer class.
        gridContainer.appendChild(squareDiv);
    }
}

// Erases/Resets all the square children in the gridContaier.
resetButton.addEventListener('click', () => {
    while(gridContainer.hasChildNodes()){
        gridContainer.removeChild(gridContainer.firstChild);
    }
    createGrid(num);
})

// Erases/Resets the gridContainer and creates a new set based on the 
// 'num' variable
device.addEventListener('wheel', () => {
    while(gridContainer.hasChildNodes()){
        gridContainer.removeChild(gridContainer.firstChild);
    }
    // Creates grid.
    createGrid(num);
})

// ClickPress event using the 'Enter' key for the input field.
function clickPress(event){
    const inputNum = document.querySelector(".amount-of-SPS").value;
    // 'Enter' key
    if(event.key == "Enter"){
        // Number varification
        if (isNaN(inputNum)){
            alert("Please enter a number.")
            return false;
        }
        else{
            // Takes the 'inputNum' variable, squares it and then rounds it up, to the
            // nearest integer.
            num = Math.ceil(Math.sqrt(inputNum));
            // Creates grid.
            createGrid(num);
        }
    }
}

