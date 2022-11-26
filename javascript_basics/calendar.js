let month = 2;
let monthLength = 0;
let startingDayOfWeek = 3;
let empty = "|    ";
let daysInAWeek = 7;
let dayOfMonth = 1;
let monthName = " ";

switch (month) {
  case 1:
    monthName = "January";
    break;
  case 2:
    monthName = "Febuary";
    break;
  case 3:
    monthName = "March";
    break;
  case 4:
    monthName = "April";
    break;
  case 5:
    monthName = "May";
    break;
  case 6:
    monthName = "June";
    break;
  case 7:
    monthName = "July";
    break;
  case 8:
    monthName = "August";
    break;
  case 9:
    monthName = "Septermber";
    break;
  case 10:
    monthName = "October";
    break;
  case 11:
    monthName = "November";
    break;
  case 12:
    monthName = "December";
    break;
}

switch (month) {
  case 1:
    monthLength = 31;
    break;
  case 2:
    monthLength = 28;
    break;
  case 3:
    monthLength = 31;
    break;
  case 4:
    monthLength = 30;
    break;
  case 5:
    monthLength = 31;
    break;
  case 6:
    monthLength = 30;
    break;
  case 7:
    monthLength = 31;
    break;
  case 8:
    monthLength = 31;
    break;
  case 9:
    monthLength = 30;
    break;
  case 10:
    monthLength = 31;
    break;
  case 11:
    monthLength = 30;
    break;
  case 12:
    monthLength = 31;
    break;

  default:
    break;
}
console.log("           " + monthName + "        ");
console.log("| MO | DI | MI | DO | FR | SA | SO |");

let outputLine = "";

for (let j = 1; j <= 35; j++) {
  if (j < startingDayOfWeek || dayOfMonth > monthLength) {
    outputLine += empty;
  } else {
    if (dayOfMonth < 10) {
      outputLine += "|  " + dayOfMonth + " ";
      dayOfMonth++;
    } else if (dayOfMonth == 10) {
      outputLine += "| " + dayOfMonth + " ";
      dayOfMonth++;
    } else if (dayOfMonth > 10) {
      outputLine += "| " + dayOfMonth + " ";
      dayOfMonth++;
    }
  }

  if (j % 7 == 0) {
    outputLine += "|";
    console.log(outputLine);
    outputLine = "";
  }
}
