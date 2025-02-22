const totalItems = 75; // Set the total number of items
const progressItems = document.getElementById("progressNumber").textContent; // Set the number of items completed
const progressBar = document.querySelector('.progress-fill');
const circumference = 251.2; // Adjusted circumference value
const offset = circumference - (progressItems / totalItems) * circumference;
progressBar.style.strokeDashoffset = offset;

// Update color based on value range
if (progressItems >= 0 && progressItems <= 20) {
  progressBar.style.stroke = '#FF0000';
} else if (progressItems >= 21 && progressItems <= 40) {
  progressBar.style.stroke = '#FF8000';
} else if (progressItems >= 41 && progressItems <= 60) {
  progressBar.style.stroke = '#FFFF00';
} else if (progressItems >= 61 && progressItems <= 75) {
  progressBar.style.stroke = '#00FF00';
}

document.querySelector('.progress-value').textContent = progressItems; // Display the actual number of items

// Check if progressItems reach 100%
if (progressItems === totalItems) {
  const completionImage = document.querySelector('.completion-image');
  completionImage.style.display = 'block'; // Show the completion image

  const progressValue = document.querySelector('.progress-value');
  progressValue.style.display = 'none'; // Hide the progress value

  const progressTotal = document.querySelector('.progress-total');
  progressTotal.style.display = 'none'; // Hide the progress total
}