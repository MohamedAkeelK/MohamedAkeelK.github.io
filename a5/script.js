// part A

// CELCIUS TO FARENHEIGHT

const cel = prompt("enter temperature in Celcius");
let faren = cel * 1.8 + 32;

document.querySelector(
  ".temperature1"
).innerHTML = `${cel} degrees Celcius is ${faren} degrees Farenheight`;

// FARENHEIGHT TO CELCIUS

const faren2 = prompt("enter temperature in Farenheight");
let cel2 = (faren2 - 32) * (5 / 9);
cel2 = cel2.toFixed(1);

document.querySelector(
  ".temperature2"
).innerHTML = `${faren2} degrees Farenheight is ${cel2} degrees Celcius`;

// part B

//Obtain user inputs
let height = Number(document.getElementById("height").value);
let weight = Number(document.getElementById("weight").value);
let height2 = Number(document.getElementById("height2").value);
let weight2 = Number(document.getElementById("weight2").value);
let higherB = document.querySelector(".higherB");

let bmi = (weight / (height * height)) * 10000;
bmi = bmi.toFixed(2);

let bmi2 = (weight2 / (height2 * height2)) * 10000;
bmi2 = bmi2.toFixed(2);

function computeBMI1() {
  document.querySelector(".bmiOutput1").innerHTML = ` your BMI is ${bmi}`;
}

function computeBMI2() {
  document.querySelector(
    ".bmiOutput2"
  ).innerHTML = ` your friends BMI is ${bmi2}`;

  if (bmi > bmi2) {
    higherB.innerHTML = `You have a higher BMI than your friend.`;
  }
  if (bmi2 > bmi) {
    higherB.innerHTML = `Your friend has a higher BMI.`;
  }
  if (bmi2 === bmi) {
    higherB.innerHTML = `You and your friend have the same BMI`;
  }
}

// part C

// Test data:
//  Data for 1: Nets score 96, 108 and 89. Knicks score 88, 91 and 110
//  Data for 3: Nets score 97, 112 and 101. Knicks score 109, 95 and 123
//  Data for 4: Nets score 97, 112 and 101. Knicks score 109, 95 and 106

let ng1 = [96, 108, 89, 97, 112, 101, 9, 112, 101];
let kg1 = [97, 112, 101, 109, 95, 123, 109, 95, 106];
let avg1 = 0;
let avg2 = 0;

for (let i = 0; i < 9; i++) {
  avg1 = avg1 + ng1[i];
  avg2 = avg2 + kg1[i];
}
avg1 = avg1 / 9;
avg2 = avg2 / 9;

console.log("Net overall average", avg1);
console.log("Knicks overall average", avg2);
if (avg1 < 100) {
  console.log(` Nets Lose, minimum score of 100 not met`);
} else if (avg2 < 100) {
  console.log(`Knicks lose, minimum score of 100 not met`);
} else if (avg1 > avg2) {
  console.log(`Nets Win! AVERAGE: ${avg1}`);
} else if (avg2 > avg1) {
  console.log(`Knicks Win! AVERAGE: ${avg2}`);
} else if (avg1 === avg2) {
  console.log(`Its a Tie!`);
}

let selection = parseInt(window.prompt("Please enter a number", ""));
if (selection === null || isNaN(selection)) {
  console.log("Please enter a number!");
} else if (selection === 10) {
  console.log("The number is matched");
} else if (selection === 8) {
  console.log("Number 8 is also matched!");
} else {
  console.log("NOT MATCHED!!");
}
