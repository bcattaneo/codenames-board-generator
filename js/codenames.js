/**
 * Loads a randomly generated board inside
 * a #container div
 */
function loadBoard() {
    let container = document.getElementById('container');
    let starting = document.getElementById('starting');
    // Create and sort board
    let blocks = [
        "red", "red", "red", "red", "red", "red", "red",
        "blue", "blue", "blue", "blue", "blue", "blue", "blue",
        "", "", "", "",
        "black"];
    let startingColor = Math.floor(Math.random()*2) == 1 ? "red" : "blue";
    blocks.push(startingColor);
    shuffleArray(blocks);
    // Load board into div
    let output = "";
    for (block in blocks) {
        output += `<div class="block ${blocks[block]}"></div>`;
    }
    container.innerHTML = output;
    starting.innerHTML = `<span class="${startingColor}-text">${startingColor}</span> goes first`;
}

/**
 * Randomize array element order in-place.
 * Using Durstenfeld shuffle algorithm.
 */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}