let r1 = Math.random() * 100;
let r2 = Math.random() * 100;

console.log(r1);
console.log(r2);

if (r1 < r2 && r1 < 50) {
  console.log(
    "Zahl 1 (" + r1 + ") ist kleiner als Zahl 2 (" + r2 + ") und mini"
  );
} else;

if (r1 < 30 || r2 < 30) {
  console.log("Eine der Beiden Zahlen ist kleiner als 30");
} else;

if (r1 < 50 && r2 == 50) {
  console.log("Erste Zahl klein, zweite kein 50er");
} else;
