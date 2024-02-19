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
  const bookedSeats = selectedSeats.length;
  const couponEnable = document.getElementById("setCoupons");
  if (bookedSeats === 4) {
    couponEnable.disabled = false;
  } else {
    couponEnable.disabled = true;
  }
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

function addDiscount() {
  const discountedPriceContainer = document.getElementById(
    "discountedPriceContainer"
  );
  discountedPriceContainer.classList.remove("hidden");

  const discountedPrice = document.getElementById("discountedPrice");
  discountedPrice.innerText = price - GrandPrice;
}
function removeDiscount() {
  const discountedPriceContainer = document.getElementById(
    "discountedPriceContainer"
  );
  discountedPriceContainer.classList.add("hidden");
}

function calculatePrice() {
  const coupon = setCoupon();
  const bookedSeats = selectedSeats.length;
  if (coupon === "NEW15" && bookedSeats === 4) {
    price = 550 * bookedSeats;
    GrandPrice = Math.round((price / 100) * 85);
    addDiscount();
    removeCouponField();
  } else if (coupon === "Couple 20" && bookedSeats === 4) {
    price = 550 * bookedSeats;
    GrandPrice = Math.round((price / 100) * 80);
    addDiscount();
    removeCouponField();
  } else {
    price = 550 * bookedSeats;
    GrandPrice = price;
  }

  const priceContainer = document.getElementById("totalPrice");
  priceContainer.innerText = price;
  const grandPriceContainer = document.getElementById("GrandPrice");
  grandPriceContainer.innerText = GrandPrice;
}

function numberAdded(event) {
  const number = event.key;
  const typed = number.length;
  const bookedSeats = selectedSeats.length;
  const submitButton = document.getElementById("submitButton");

  if (typed && bookedSeats > 0) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}
