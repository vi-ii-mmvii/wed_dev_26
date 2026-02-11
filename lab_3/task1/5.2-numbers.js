let a = +prompt("The first number?", "");
let b = +prompt("The second number?", "");
alert(a + b);

alert(Math.round(6.35 * 10) / 10);
function readNumber() {
  let num;
  do {
    num = prompt("Enter a number please?", 0);
  } while (num !== null && num !== "" && !isFinite(num));

  if (num === null || num === "") return null;
  return +num;
}

alert(`Read: ${readNumber()}`);

function random(min, max) {
  return min + Math.random() * (max - min);
}

alert(random(1, 5));
alert(random(1, 5));
alert(random(1, 5));
function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

alert(randomInteger(1, 5));
alert(randomInteger(1, 5));
alert(randomInteger(1, 5));
