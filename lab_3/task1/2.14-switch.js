let browser = prompt("What browser do you use?", "");

switch (browser) {
  case "Edge":
    alert("You've got the Edge!");
    break;
  case "Chrome":
  case "Firefox":
  case "Safari":
  case "Opera":
    alert("Okay we support these browsers too");
    break;
  default:
    alert("We hope that this page looks ok!");
}
let a = +prompt("a?", "");

if (a == 0) {
  alert(0);
} else if (a == 1) {
  alert(1);
} else if (a == 2 || a == 3) {
  alert("2,3");
}
