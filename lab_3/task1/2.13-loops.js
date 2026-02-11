let i = 3;
while (i) {
  alert(i--);
}
let i1 = 0;
while (++i1 < 5) alert(i1);

let i2 = 0;
while (i2++ < 5) alert(i2);
for (let i = 0; i < 5; i++) alert(i);

for (let i = 0; i < 5; ++i) alert(i);
for (let i = 2; i <= 10; i += 2) {
  alert(i);
}
let j = 0;
while (j < 3) {
  alert(`number ${j}!`);
  j++;
}
let num;
do {
  num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);
let n = 10;

for (let i = 2; i <= n; i++) {
  let isPrime = true;
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) alert(i);
}
