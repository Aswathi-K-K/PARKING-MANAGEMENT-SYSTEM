// Get all square elements
const squares = document.querySelectorAll('.square');
const selectedSlotInput = document.getElementById('selected-slot');

// Add event listener to each square
squares.forEach(square => {
    square.addEventListener('click', () => {
        // Reset background color of all squares
        squares.forEach(otherSquare => {
            otherSquare.style.backgroundColor = 'rgb(2, 192, 2)';
            otherSquare.style.color = 'white';
        });

        // Change color of the clicked square to red
        square.style.backgroundColor = 'yellow';
        square.style.color = 'black';
        selectedSlotInput.value = square.textContent;
        // Change color of the select button to green
        document.getElementById('parking-lots').style.backgroundColor = 'green';
    });
});

// Add event listener to the document
document.addEventListener('click', (event) => {
    // Check if the clicked element is not a square or the select button
    if (!event.target.classList.contains('square') && event.target.id !== 'parking-lots') {
        // Reset colors to initial values
        squares.forEach(square => {
            square.style.backgroundColor = 'rgb(2, 192, 2)';
            square.style.color = 'white';
        });
        document.getElementById('parking-lots').style.backgroundColor = '';
    }
});
