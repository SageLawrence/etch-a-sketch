function boxCreate(edgeCount) { // function to create gid of specified size

    for (let i = 0; i < edgeCount; i++) { // loops through for column creation

        let divBox = document.createElement('div'); // creates one div in memory that will make a column

        divBox.classList.add('divBox'); // adds a CSS class for column traits
        
        let container = document.getElementById('container'); // selects the main container div from the HTML

        container.appendChild(divBox); // adds the column within the container div

        for (let j = 0; j < edgeCount; j++) { // loops through for div box creation within columns

            let div = document.createElement('div'); // creates one div in memory that will make a box

            div.classList.add('div'); // adds a CSS class for box traits

            divBox.appendChild(div); // adds the box within the column

        }

    }

    hoverAdd() // calls function to add color

}

const selectButton = document.querySelector('.selector'); // sets button to variable

selectButton.addEventListener('click', removeGrid); // button listens for click and runs function to remove old grid

function removeGrid() {

    const removes = document.querySelector('#container'); // selects the overall container

    removes.textContent = ''; // removes all divs from the container

    sizeSelect(); // runs size selection function for new grid

}

function sizeSelect() {

    let edgeCount = prompt('What size grid would you like? (Max 250)'); // gets edge length as input

    if (edgeCount <= 250) {

        boxCreate(edgeCount); // passes the input to the box creation function

    } else {
        
        alert('Box count is too high!');

    }

}

function hoverAdd() {

    const divs = document.querySelectorAll('.div'); // selects all divs with class .div

    divs.forEach(div => div.addEventListener('mouseover', sketch)); // adds listener for mouseover to call sketch function

    divs.forEach(div => div.style.backgroundColor = 'rgb(255, 255, 255'); // adds white in rgb as the original background color

}

function sketch() { // alters box when it is hovered over

    let backgroundColor = this.style.backgroundColor; // retrieves current background color

        if (backgroundColor === 'rgb(255, 255, 255)') { // if fully white sets color to grey first

            backgroundColor = 'rgb(100, 100, 100)';

        } else {

            backgroundColor = 'rgb(0, 0, 0)';

        }

    this.style.backgroundColor = backgroundColor; // sets background color of div based on mouseovers

}

const clear = document.querySelector('.clear'); // sets button to variable

clear.addEventListener('click', clearBoxes); // button listens for click and runs function to clear cells

function clearBoxes() { // clears cells of color

    let boxes = document.querySelectorAll('.div');

    boxes.forEach(box => box.style.backgroundColor = 'rgb(255, 255, 255')

}