// orders.js
function showNewOrderForm() {
  let form = document.getElementById("newOrderForm");
  form.style.display = "block";
}

function updateDescription() {
  let select = document.getElementById("orderPack");
  let description = document.getElementById("orderPackDescription");
  let price = document.getElementById("pricePack");
  let option = select.options[select.selectedIndex].value;

  switch (option) {
    case "Bronze Simply":
      description.textContent =
        "Includes: 1 Steels Photographers, 1 Video Photographers, 2 Album 30X80 CM.";
      price.value = "3500 ILS";
      break;
    case "Silver Plus":
      description.textContent =
        "Includes: 2 Steels Photographers, 1 Video Photographers, 3 Album 30X80 CM, 500 Magnets 10X12 CM.";
      price.value = "5000 ILS";
      break;
    case "Gold Premium":
      description.textContent =
        "Includes: 3 Steels Photographers, 2 Video Photographers, 5 Album 40X60 CM, 1000 Magnet 20X24, 2 Canvas 60X90 CM.";
      price.value = "8900 ILS";
      break;
    // Add more cases as needed
    default:
      description.textContent = "";
      price.value = "";
      break;
  }
}

function updateLocationDetails() {
  let locationSelect = document.getElementById("location");
  let locationArea = document.getElementById("locationArea");
  let locationCity = document.getElementById("locationCity");
  let locationDetails = document.getElementById("locationDetails");
  let selectedLocation =
    locationSelect.options[locationSelect.selectedIndex].value;

  // Update location details based on the selected location name
  switch (selectedLocation) {
    case "Chatto":
      locationArea.textContent = "North";
      locationCity.textContent = "Tiberias";
      break;
    case "Kala":
      locationArea.textContent = "North";
      locationCity.textContent = "Haifa";
      break;
    case "Sandrine":
      locationArea.textContent = "North";
      locationCity.textContent = "Nahariya";
      break;
    case "Odeon":
      locationArea.textContent = "Center";
      locationCity.textContent = "Emek Hefer";
      break;
    case "Kai":
      locationArea.textContent = "Center";
      locationCity.textContent = "Emek Hefer";
      break;
    case "Troya":
      locationArea.textContent = "Center";
      locationCity.textContent = "Ashdod";
      break;
    case "Adora":
      locationArea.textContent = "South";
      locationCity.textContent = "Dimona";
      break;
    case "Narnia":
      locationArea.textContent = "South";
      locationCity.textContent = "Beer Sheva";
      break;
    case "Tao":
      locationArea.textContent = "South";
      locationCity.textContent = "Kanot";
      break;
    default:
      locationArea.textContent = "";
      locationCity.textContent = "";
      break;
  }

  // Display location details if a location is selected
  if (selectedLocation) {
    locationDetails.style.display = "block";
  } else {
    locationDetails.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const dateInput = document.getElementById("dateOfEvent");
  const today = new Date();
  const maxDate = new Date(
    today.getFullYear() + 4,
    today.getMonth(),
    today.getDate()
  );

  // Set the min and max attributes for the date input
  dateInput.min = today.toISOString().split("T")[0];
  dateInput.max = maxDate.toISOString().split("T")[0];

  form.addEventListener("submit", function (event) {
    const dateOfEvent = dateInput.value;

    // Check if the selected date is in the past
    if (dateOfEvent < today.toISOString().split("T")[0]) {
      alert("The date of the event must be today or in the future.");
      event.preventDefault(); // Prevent form from submitting
    }
  });
});
