function showTip() {
  const tips = [
    "Turn off lights when leaving a room!",
    "Use reusable bottles instead of plastic ones!",
    "Plant more trees and flowers!",
    "Recycle paper, glass, and metal properly!",
    "Walk or bike to nearby places instead of driving!"
  ];
  const randomIndex = Math.floor(Math.random() * tips.length);
  document.getElementById("randomTip").textContent = tips[randomIndex];
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("feedbackForm");
  if (form) {
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      document.getElementById("feedbackResponse").textContent =
        "✅ Thank you for your feedback, " + document.getElementById("name").value + "!";
      form.reset();
    });
  }
});