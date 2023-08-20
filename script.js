const yearInput = document.getElementById("yearOfBirth");
const currentYear = new Date().getFullYear();
const ageDisplay = document.getElementById("ageResults");
const textBoard = document.getElementById("textBoard");

yearInput.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("submit").click();
  }
});

function ageCounter() {
  let yearOfBirth = parseInt(yearInput.value);
  let ageResults = currentYear - yearOfBirth;

  if (yearOfBirth) {
    ageDisplay.innerHTML = ageResults + " Years";
    textBoard.innerHTML = "Your Age Is";
    if (ageResults == 1) {
      ageDisplay.innerHTML = ageResults + " Year";
      textBoard.innerHTML = "Your Age Is";
    } else if (ageResults <= 0) {
      ageDisplay.innerHTML = "";
      textBoard.innerHTML = "No results";
    }
    document.getElementById("yearOfBirth").value = "";
  }
}
