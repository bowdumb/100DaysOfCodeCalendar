// DOMContentLoaded ensures that all of the content is loaded before executing the JavaScript below.
document.addEventListener('DOMContentLoaded', () => {
    // Selects the container element where the tiles will be added, and assigns it to the tileContainer variable.
    const tileContainer = document.getElementById('tile-container');
    const numTiles = 100;

    for (let i=0; i < numTiles; i++) {
        const tile = document.createElement('div');

        tile.classList.add('tile');
        tile.id = `tile-${i}`;
        const num = document.createElement('p');
        num.textContent = i + 1;
        tile.appendChild(num);

        if (localStorage.getItem(`tile-${i}`) === 'active') {
            tile.classList.add('active');
        }

        tile.addEventListener('click', () => {
            tile.classList.toggle('active');
            localStorage.setItem(`tile-${i}`, tile.classList.contains('active') ? 'active' : '');
        });
        
        tileContainer.appendChild(tile);
    }
    
});



