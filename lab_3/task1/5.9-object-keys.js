function sumSalaries(salaries) {
  let sum = 0;
  for (let salary of Object.values(salaries)) {
    sum += salary;
  }
  return sum;
}
alert(sumSalaries({ John: 100, Pete: 300, Mary: 250 }));
alert(sumSalaries({}));
function count(obj) {
  return Object.keys(obj).length;
}

alert(count({ name: "John", age: 30 }));
