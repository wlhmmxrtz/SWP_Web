let plays = [
  { id: 1, title: "Schere", loss: 2 },
  { id: 2, title: "Stein", loss: 3 },
  { id: 3, title: "Papier", loss: 1 }
];

playedMove = 0;

result = 0;
function playOne() {
  console.log(playedMove);
  playedMove = 1;
  console.log(playedMove);
  randomNumber();
  console.log("C: " + result);

  if (result == playedMove) {
    console.log("Unentschieden");
    resultDraw();
  } else if (plays[playedMove-1].loss === result) {
    resultLoss();
  } else {
    resultWin();
  }
}

function playTwo() {
  console.log(playedMove);
  playedMove = 2;
  console.log(playedMove);
  randomNumber();

  if (result == playedMove) {
    console.log("Unentschieden");
    resultDraw();
  } else if (plays[playedMove-1].loss === result) {
    resultLoss();
  } else {
    resultWin();
  }
}

function playThree() {
  console.log(playedMove);
  playedMove = 3;
  console.log(playedMove);
  randomNumber();

  if (result == playedMove) {
    console.log("Unentschieden");
    resultDraw();
  } else if (plays[playedMove-1].loss === result) {
    resultLoss();
  } else {
    resultWin();
  }
}

function randomNumber() {
  let rn1 = Math.floor(Math.random() * 3) + 1;
  console.log("Random Number is " + rn1);
  result = rn1;
}

function resultDraw() {
  document.getElementById("output").innerHTML =
    "Unentschieden, beide haben " + plays[playedMove - 1].title;
}

function resultWin() {
  document.getElementById("output").innerHTML =
    "Du gewinnst, der Computer hatte " + plays[result - 1].title;
}

function resultLoss() {
  document.getElementById("output").innerHTML =
    "Du verlierst, der Computer hatte " + plays[result - 1].title;
}
