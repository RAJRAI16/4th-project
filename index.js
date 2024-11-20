// Function to handle "Book Ride" button clicks
function handleBookRideClick() {
    alert("Your bike ride is scheduled");
  }
  
  // Add event listeners to all "Book Ride" buttons
  document.querySelectorAll('.btn-outline-secondary').forEach(button => {
    if (button.textContent.trim() === "Book Ride") {
      button.addEventListener('click', handleBookRideClick);
    }
  });
  
