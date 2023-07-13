const grid = document.querySelector('.grid');

let dimension = 10;
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

function changeColour(e) {
    e.target.style.background = 'black';
}
