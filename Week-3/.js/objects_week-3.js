let person = {
  name: "Max",
  age: 17,
  isVegetarian: false,
  giveInfo: function () {
    if (this.isVegetarian) {
      this.isVegetarian = "vegetarisch";
    } else {
      this.isVegetarian = "nicht vegetarisch";
    }
    console.log(
      `"${this.name} ist ${this.age} Jahre alt und isst ${this.isVegetarian}."`,
    );
  },
};

let calculator = {
  lastResult: null,
  operationCounter: 3,
  newLastResult: function (newresult) {
    this.lastResult = newresult;
  },
  operationCounterIncreasse: function () {
    this.operationCounter++;
    return this.operationCounter;
  },
};
console.log((calculator.lastResult = 44));
for (i = 0; i < 3; i++) {
  calculator.operationCounterIncreasse();
}
console.log(calculator.operationCounter);

class History {
  constructor(num1, num2, calculationMethod, result) {
    this.num1 = num1;
    this.num2 = num2;
    this.calculationMethod = calculationMethod;
    this.result = result;
  }

  displayHistoryCalculation() {
    console.log(
      `${this.num1} ${this.calculationMethod} ${this.num2} = ${this.result}`,
    );
  }
}

let historyCalculation1 = new History(3, 4, '*', 12);
historyCalculation1.displayHistoryCalculation();