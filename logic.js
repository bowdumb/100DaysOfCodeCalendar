document.addEventListener('DOMContentLoaded', () => {
    const tileContainer = document.getElementById('tile-container');
    const numTiles = 100;

    for (let i=0; i < numTiles; i++) {
        const tile = document.createElement('div');
        tile.classList.add('tile');
        tile.id = `tile-${i}`;
        tileContainer.appendChild(tile);
    }
    
});



