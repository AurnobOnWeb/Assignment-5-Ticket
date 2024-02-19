const selectedSeats = [];
let totalSeats = 40;

// Function to handle seat selection
function selectSeat(seatId) {
  const index = selectedSeats.indexOf(seatId);
  if (index === -1) {
    if (selectedSeats.length < 4) {
      selectedSeats.push(seatId);
      addColor(seatId);
      appendSeat();
      calculatePrice();
      decreaseSeat();
    } else {
      console.log("");
      const error = document.getElementById("errors");
      error.classList.remove("hidden");
    }
  } else {
    selectedSeats.splice(index, 1);
    removeColor(seatId);
    calculatePrice();
    appendSeat();
    increaseSeat();
  }
}
