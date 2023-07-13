const grid = document.querySelector('.grid');

function getDimension() {
    let dimension = prompt('Enter new dimension');
    if (dimension > 100) {
        return getDimension();
    }
    return dimension;
}

function createGrid(dimension) {
    for (let i = 0; i < dimension; i++) {
        const newCol = document.createElement('div');
        newCol.setAttribute('style', 
            `flex-grow: 1;
            display: flex;
            flex-direction: column;`)
        for (let j = 0; j < dimension; j++) {
            const newDiv = document.createElement('div');
            newDiv.setAttribute('style', 
                `flex: auto; 
                height: 20px;
                border: 1px solid black`)
            newDiv.addEventListener('mouseover', changeColour);
            newCol.appendChild(newDiv);
        }
        grid.appendChild(newCol);
    } 
}

function changeGrid() {
    let dimension = getDimension();
    grid.replaceChildren();
    createGrid(dimension);
}

function changeColour(e) {
    colour = getRandomColour();
    e.target.style.background = colour;
}

function getRandomColour() {
    let letters = '0123456789ABCDEF';
    let colour = '#'
    for (let i = 0; i < 6; i++) {
        colour += letters[Math.floor(Math.random() * 16)];
    }
    return colour;
}

createGrid(16);

const btn = document.querySelector('.set-dimension');
btn.addEventListener('click', changeGrid);
