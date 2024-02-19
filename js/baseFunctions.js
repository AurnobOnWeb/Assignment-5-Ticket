//  scroll on click
function scrollToSection() {
  const section = document.getElementById("ticketPurchasing");
  section.scrollIntoView({ behavior: "smooth", block: "start" });
}
// change Color
function addColor(color) {
  const element = document.getElementById(color);
  element.classList.add("bg-primary");
}

function removeColor(color) {
  const element = document.getElementById(color);
  element.classList.remove("bg-primary");
}

function enableCoupon() {
  const couponEnable = document.getElementById("setCoupons");
  couponEnable.disabled = false;
}
function removeCouponField() {
  const element = document.getElementById("couponDiv");
  element.classList.add("hidden");
}
function setCoupon() {
  const couponId = document.getElementById("coupon");
  return couponId.value;
}
function decreaseSeat() {
  const bookedSeats = selectedSeats.length;

  const seatLeft = document.getElementById("seatLeft");

  const availableSeats = totalSeats - bookedSeats;
  seatLeft.innerText = availableSeats;

  const seatCount = document.getElementById("seatCount");
  seatCount.innerText = bookedSeats;
}

function increaseSeat() {
  const bookedSeats = selectedSeats.length;

  const seatLeft = document.getElementById("seatLeft");

  const availableSeats = totalSeats - bookedSeats;
  seatLeft.innerText = availableSeats;

  const seatCount = document.getElementById("seatCount");
  seatCount.innerText = bookedSeats + 1;
}

function appendSeat() {
  const selectedSeatsContainer = document.getElementById("selected-seats");
  selectedSeatsContainer.innerHTML = "";

  selectedSeats.forEach((seatId) => {
    const seatInfo = document.createElement("ul");
    seatInfo.classList.add(
      "flex",
      "justify-between",
      "font-inter",
      "text-dark-100"
    );

    const seatNumber = document.createElement("li");
    seatNumber.textContent = seatId;

    const seatClass = document.createElement("li");
    seatClass.textContent = "Economy";

    const seatPriceContainer = document.createElement("li");
    seatPriceContainer.classList.add("flex", "gap-2");
    const seatPrice = document.createElement("span");
    seatPrice.textContent = "550";
    const fareImage = document.createElement("img");
    fareImage.src = "images/fare.png";
    fareImage.classList.add("h-6");

    seatPriceContainer.appendChild(seatPrice);
    seatPriceContainer.appendChild(fareImage);

    seatInfo.appendChild(seatNumber);
    seatInfo.appendChild(seatClass);
    seatInfo.appendChild(seatPriceContainer);

    selectedSeatsContainer.appendChild(seatInfo);
  });
}
let price = 0;
let GrandPrice = 0;

function calculatePrice() {
  const coupon = setCoupon();
  const bookedSeats = selectedSeats.length;
  if (coupon != null && coupon === "NEW15") {
    price = 550 * bookedSeats;
    GrandPrice = Math.round((price / 100) * 85);
    removeCouponField();
  } else if (coupon != null && coupon === "Couple 20") {
    price = 550 * bookedSeats;
    GrandPrice = Math.round((price / 100) * 80);
    removeCouponField();
  } else {
    price = 550 * bookedSeats;
  }

  const priceContainer = document.getElementById("totalPrice");
  priceContainer.innerText = price;
  const grandPriceContainer = document.getElementById("GrandPrice");
  grandPriceContainer.innerText = GrandPrice;
}
