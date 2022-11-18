for (let i = 0; i < 4; i++) {
  let row = "";
  for (let i1 = 0; i1 < 4; i1++) {
    if (i % 2 != 0) {
      row += "o";
    } else {
      row += "x";
    }
  }
  console.log(row);
}
