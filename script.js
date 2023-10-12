let meditationCount = 0;
let gymCount = 0;
let codeCount = 0;

const meditationGoal = 200;
const gymGoal = 140;
const codeGoal = 220;

let meditationLength = 0;
let gymLength = 0;
let codeLength = 0;

const meditationCheckbox = document.querySelector(".meditation-checkbox");
const gymCheckbox = document.querySelector(".gym-checkbox");
const codeCheckbox = document.querySelector(".code-checkbox");
const finishButton = document.querySelector(".finish-button");

finishButton.addEventListener("click", () => {
  console.log("inside");
  if (meditationCheckbox.checked) meditationCount++;
  if (gymCheckbox.checked) gymCount++;
  if (codeCheckbox.checked) codeCount++;
  console.log(meditationCount, gymCount, codeCount);
});
