function camelize(str) {
  return str
    .split("-")
    .map((word, index) => (index === 0 ? word : word[0].toUpperCase() + word.slice(1)))
    .join("");
}

alert(camelize("background-color")); 
alert(camelize("list-style-image")); 
alert(camelize("-webkit-transition"));
function filterRange(arr, a, b) {
  return arr.filter((item) => item >= a && item <= b);
}

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
alert(filtered);
function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < a || arr[i] > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}

let arr2 = [5, 3, 8, 1];
filterRangeInPlace(arr2, 1, 4);
alert(arr2);
let arr3 = [5, 2, 1, -10, 8];
arr3.sort((a, b) => b - a);
alert(arr3);
function copySorted(arr) {
  return arr.slice().sort();
}

let arr4 = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr4);
alert(sorted); 
alert(arr4);   
function Calculator() {
  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b,
  };

  this.calculate = function (str) {
    let split = str.split(" ");
    let a = +split[0];
    let op = split[1];
    let b = +split[2];

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }
    return this.methods[op](a, b);
  };

  this.addMethod = function (name, func) {
    this.methods[name] = func;
  };
}

let calc = new Calculator();
alert(calc.calculate("3 + 7"));

let powerCalc = new Calculator();
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);
alert(powerCalc.calculate("2 ** 3"));
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };
let users = [john, pete, mary];

let names = users.map((item) => item.name);
alert(names);
let john2 = { name: "John", surname: "Smith", id: 1 };
let pete2 = { name: "Pete", surname: "Hunt", id: 2 };
let mary2 = { name: "Mary", surname: "Key", id: 3 };
let users2 = [john2, pete2, mary2];

let usersMapped = users2.map((user) => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id,
}));

alert(usersMapped[0].id);      
alert(usersMapped[0].fullName);
function sortByAge(arr) {
  arr.sort((a, b) => a.age - b.age);
}

let john3 = { name: "John", age: 25 };
let pete3 = { name: "Pete", age: 30 };
let mary3 = { name: "Mary", age: 28 };
let arr5 = [pete3, john3, mary3];
sortByAge(arr5);
alert(arr5[0].name);
alert(arr5[1].name);
alert(arr5[2].name);
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

let arr6 = [1, 2, 3];
shuffle(arr6);
alert(arr6);
function getAverageAge(users) {
  return users.reduce((sum, user) => sum + user.age, 0) / users.length;
}

let john4 = { name: "John", age: 25 };
let pete4 = { name: "Pete", age: 30 };
let mary4 = { name: "Mary", age: 29 };
alert(getAverageAge([john4, pete4, mary4]));
function unique(arr) {
  let result = [];
  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }
  return result;
}

let strings = [
  "Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O",
];
alert(unique(strings));
function groupById(arr) {
  return arr.reduce((obj, value) => {
    obj[value.id] = value;
    return obj;
  }, {});
}

let users3 = [
  { id: "john", name: "John", age: 20 },
  { id: "ann", name: "Ann", age: 24 },
  { id: "pete", name: "Pete", age: 31 },
];

let usersById = groupById(users3);
alert(usersById["john"].name);
