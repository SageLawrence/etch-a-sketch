function boxCreate(edgeCount) { // function to create gid of specified size

    for (let i = 0; i < edgeCount; i++) { // loops through for column creation

        let divBox = document.createElement('div'); // creates one div in memory that will make a column
        divBox.classList.add('divBox'); // adds a CSS class for column traits
        let container = document.getElementById('container'); // selects the main container div from the HTML
        container.appendChild(divBox); // adds the column within the container div

        for (let j = 0; j <  edgeCount; j++) { // loops through for div box creation within columns

            let div = document.createElement('div'); // creates one div in memory that will make a box
            div.classList.add('div'); // adds a CSS class for box traits
            divBox.appendChild(div); // adds the box within the column

        }

    }

    hoverAdd() // calls funciton to add color

}

const button = document.querySelector('.selector'); // sets button to variable

button.addEventListener('click', sizeSelect); // button listens for click

function sizeSelect() {

    let edgeCount = prompt('What size grid would you like? (Max 100)'); // gets edge length as input

    if (edgeCount <= 100) {

        boxCreate(edgeCount); // passes the input to the box creation function

    } else {
        
        alert('Box count is too high!');

    }

}

function hoverAdd() {

    const divs = document.querySelectorAll('.div'); // selects all divs with class .div
    divs.forEach(div => div.addEventListener('mouseover', sketch)); // adds listener for mouseover to call sketch function

}

function sketch() { // alters box after it is hovered over

    this.classList.add('hovered'); // adds class to color the box in

}