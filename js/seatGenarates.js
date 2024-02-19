function generateSeats() {
  const seatContainer = document.getElementById("seat-container");
  const rows = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

  rows.forEach((row) => {
    const rowDiv = document.createElement("div");
    rowDiv.classList.add(
      "flex",
      "gap-1",
      "items-center",
      "justify-between",
      "my-5",
      "text-dark-100",
      "font-inter"
    );
    const alphabetSpan = document.createElement("span");
    alphabetSpan.classList.add("mx-1");
    alphabetSpan.textContent = row;
    rowDiv.appendChild(alphabetSpan);
    for (let i = 1; i <= 4; i++) {
      const seat = document.createElement("button");

      seat.classList.add(
        "btn",
        "hover:bg-primary",
        "px-10",
        "lg:px-14",
        "text-dark-100",
        "bg-[#F7F8F8]"
      );
      seat.textContent = `${row}${i}`;
      seat.id = `${row}${i}`;
      seat.onclick = function () {
        selectSeat(this.id);
      };
      rowDiv.appendChild(seat);
    }

    seatContainer.appendChild(rowDiv);
  });
}

window.onload = function () {
  generateSeats();
};
