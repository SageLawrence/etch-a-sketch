for (let i = 0; i < 16; i++) { // loops through for column creation

    let divBox = document.createElement('div'); // creates one div in memory that will make a column
    divBox.classList.add('divBox'); // adds a CSS class for column traits
    let container = document.getElementById('container'); // selects the main container div from the HTML
    container.appendChild(divBox); // adds the column within the container div

    for (let j = 0; j <  16; j++) { // loops through for div box creation within columns

        let div = document.createElement('div'); // creates one div in memory that will make a box
        div.classList.add('div'); // adds a CSS class for box traits
        divBox.appendChild(div); // adds the box within the column

    }

}

const divs = document.querySelectorAll('.div');

divs.forEach(div => div.addEventListener('mouseover', sketch));

function sketch() {
    this.classList.add('hovered');
}