number = Math.random() * 6 + 5;

roundedNumber = Math.round(number);

console.log(number + " ~ " + roundedNumber);

switch (roundedNumber) {
  case 5:
    console.log("Five");
    break;
  case 6:
    console.log("Six");
    break;
  case 7:
    console.log("Seven");
    break;
  case 8:
    console.log("Eight");
    break;
  case 9:
    console.log("Nine");
    break;
  case 10:
    console.log("Ten");
    break;
}
