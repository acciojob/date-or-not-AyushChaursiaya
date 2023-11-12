function checkDate() {
  const dateInput = document.getElementById('dateInput').value;
  const resultElement = document.getElementById('result');
  
  if (isDate(dateInput)) {
    resultElement.textContent = 'Valid Date!';
    resultElement.style.color = '#4caf50';  // Green color for success
  } else {
    resultElement.textContent = 'Invalid Date!';
    resultElement.style.color = '#e74c3c';  // Red color for failure
  }
}

function isDate(input) {
  // The same isDate function as mentioned in the previous code snippet
}
