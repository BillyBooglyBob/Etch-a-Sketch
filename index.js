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
    e.target.style.background = 'black';
}

createGrid(16);

const btn = document.querySelector('.set-dimension');
btn.addEventListener('click', changeGrid);
