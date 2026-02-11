alert(null || 2 || undefined);
alert(alert(1) || 2 || alert(3));
alert(1 && null && 2);
alert(alert(1) && alert(2));
alert(null || 2 && 3 || 4);
let age = prompt("Age?", 18);
if (age >= 14 && age <= 90) {
  alert("In range");
}
if (!(age >= 14 && age <= 90)) {
  alert("Outside the range");
}
if (age < 14 || age > 90) {
  alert("Outside the range");
}
if (-1 || 0) alert('first');  
if (-1 && 0) alert('second'); 
if (null || -1 && 1) alert('third');
