let number = 0;
let finished = "Program is finished";

for (let i = 1; i <= 100; i++) {
  if (i % 2 == 0) {
    number += i;
    console.log(number);
  }
  if (i == 100) {
    console.log(finished);
  } else {
  }
}
