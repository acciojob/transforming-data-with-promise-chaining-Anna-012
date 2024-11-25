//your JS code here. If required.
// Add an event listener to the button for the click event
document.getElementById('btn').addEventListener('click', () => {
  const inputNumber = parseInt(document.getElementById('ip').value, 10);
  const outputDiv = document.getElementById('output');

  // Check if the input is valid
  if (isNaN(inputNumber)) {
    outputDiv.textContent = 'Please enter a valid number.';
    return;
  }

  // Start the chain of promises
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(inputNumber); // Resolve with the initial input number after 2 seconds
    }, 2000);
  })
  .then((number) => {
    outputDiv.textContent = `Result: ${number}`; // Print the result after 2 seconds
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(number * 2); // Multiply by 2 and resolve after 1 second
      }, 1000);
    });
  })
  .then((number) => {
    outputDiv.textContent = `Result: ${number}`; // Print after multiplication
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(number - 3); // Subtract 3 and resolve after 1 second
      }, 1000);
    });
  })
  .then((number) => {
    outputDiv.textContent = `Result: ${number}`; // Print after subtraction
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(number / 2); // Divide by 2 and resolve after 1 second
      }, 1000);
    });
  })
  .then((number) => {
    outputDiv.textContent = `Result: ${number}`; // Print after division
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(number + 10); // Add 10 and resolve after 1 second
      }, 1000);
    });
  })
  .then((number) => {
    outputDiv.textContent = `Result: ${number}`; // Print after addition
    // Final result after all transformations
    outputDiv.textContent = `Final Result: ${number}`;
  })
  .catch((error) => {
    console.error('Error:', error);
    outputDiv.textContent = 'An error occurred during the transformation.';
  });
});
