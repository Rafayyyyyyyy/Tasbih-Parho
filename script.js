let counterValue = 0;
let clickCount = 0; // Track the number of clicks

// Increment the counter
function incrementCounter() {
    console.log("Circle clicked!"); // Log when the circle is clicked
    clickCount++; // Increment the click count
    counterValue = clickCount; // Update counter value based on clicks
    updateCounter();
}

// Edit the counter
function editCounter() {
    const newValue = prompt("Enter a new value for the counter (0-100):", counterValue);
    if (newValue !== null && !isNaN(newValue) && newValue >= 0 && newValue <= 100) {
        counterValue = parseInt(newValue);
        updateCounter();
    } else {
        alert("Invalid input. Please enter a number between 0 and 100.");
    }
}

// Reset the counter
function resetCounter() {
    counterValue = 0;
    clickCount = 0; // Reset click count
    updateCounter();
}

// Reset everything (Button 2 functionality)
function resetEverything(event) {
    event.stopPropagation(); // Prevent triggering the parent circle's click event
    counterValue = 0;
    clickCount = 0; // Reset click count
    updateCounter();
    alert("Everything has been reset!");
}

// Update the displayed counter
function updateCounter() {
    document.getElementById("counter").textContent = counterValue;
}

// Restrict selection for the Donate Food link
function restrictSelection(event) {
    event.preventDefault(); // Prevent the default action of the link
    alert("This action is restricted."); // Inform the user
}
