for (let i = 0; i < 16; i++) {

    let divBox = document.createElement('div'); // creates one div to make a box
    divBox.classList.add('divBox'); // adds a CSS class for box traits
    let container = document.getElementById('container'); // selects the container div from the HTML
    container.appendChild(divBox); // adds the box within the container div

}