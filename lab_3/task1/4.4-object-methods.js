function makeUser() {
  return {
    name: "John",
    ref: this,
  };
}

let user = makeUser();

function makeUser2() {
  return {
    name: "John",
    ref() {
      return this;
    },
  };
}

let user2 = makeUser2();
alert(user2.ref().name);
let calculator = {
  read() {
    this.a = +prompt("a?", 0);
    this.b = +prompt("b?", 0);
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    alert(this.step);
    return this;
  },
};

ladder.up().up().down().showStep().down().showStep();
