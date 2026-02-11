let user = {
  name: "John",
  years: 30,
};

let { name, years: age, isAdmin = false } = user;

alert(name);   
alert(age);    
alert(isAdmin);
function topSalary(salaries) {
  let maxSalary = 0;
  let maxName = null;

  for (let [name, salary] of Object.entries(salaries)) {
    if (salary > maxSalary) {
      maxSalary = salary;
      maxName = name;
    }
  }

  return maxName;
}

alert(topSalary({ John: 100, Pete: 300, Mary: 250 }));
alert(topSalary({}));
