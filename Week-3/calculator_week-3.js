// variables
let num1 = null;
let num2 = null;
let result = null;
let calculationMethod = null;
const calculationMethodList = ["+", "-", "*", "/", "**", "%"];

// functions
function addition() {
  return (result = num1 + num2);
}

function subtraction() {
  return (result = num1 - num2);
}

function multiplication() {
  return (result = num1 * num2);
}

function division() {
  return (result = num1 / num2);
}

function exponentiation() {
  return (result = num1 ** num2);
}

function remaining() {
  return (result = num1 % num2);
}

function showHistory() {
  console.log(history.join[" | "]);
}

function newCalculation() {
  if (num1 == "/clear" || num2 == "/clear" || calculationMethod == "/clear") {
    num1 = null;
    return true;
  } else {
    return false;
  }
}

function stopAll() {
  if (num1 == "/stop" || num2 == "/stop" || calculationMethod == "/stop") {
    return true;
  } else {
    return false;
  }
}

function selectNum1() {
  num1 = prompt(
    "Gib hier deine erste Zahl ein. (Mit /result kannst du das Ergebnis deiner letzten Rechnung als Zahl wählen)",
  );

  while (isNaN(num1)) {
    if (num1 == "/result") {
      if (result != null) {
        num1 = result;
      } else {
        num1 = prompt(
          "Error: Es gibt keine vorherige Rechnung. Nimm eine neue Zahl.",
        );
      }
    } else if (num1 == "/stop") {
      return;
    } else if (num1 == "/clear") {
      return;
    } else {
      num1 = prompt(
        "Die Zahl " + num1 + " wurde nicht erkannt. Versuche es nochmal.",
      );
    }
  }
  num1 = Number(num1);
  return num1;
}

function selectNum2() {
  num2 = prompt("Gib hier deine zweite Zahl ein.");

  while (isNaN(num2)) {
    if (num2 == "/clear") {
      return;
    } else if (num2 == "/stop") {
      return;
    } else {
      num2 = prompt(
        "Die Zahl " + num2 + " wurde nicht erkannt. Versuche es nochmal.",
      );
    }
  }
  num2 = Number(num2);
  return num2;
}

function selectCalculationMethod() {
  calculationMethod = prompt(
    "Wähle dein Rechenzeichen (+ | - | * | / | ** | %)",
  );
  while (true) {
    if (calculationMethod == "/clear") {
      return;
    } else if (calculationMethod == "/stop") {
      return;
    } else if (!calculationMethodList.includes(calculationMethod))
      calculationMethod = prompt(
        "Das Rechenzeichen " +
          calculationMethod +
          " Wurde nicht erkannt. Wähle ein's aus der Liste: (+ | - | * | / | ** | %)",
      );
    else return;
    calculationMethod;
  }
}

function calculate() {
  switch (calculationMethod) {
    case "/clear":
      return;
    case "/result":
      num1 = result;
      return;
    case "+":
      addition();
      return;
    case "-":
      subtraction();
      return;
    case "*":
      multiplication();
      return;
    case "/":
      division();
      return;
    case "**":
      exponentiation();
      return;
    case "%":
      remaining();
      return;
  }
}

class HistoryItem {
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

// run
console.log(
  "Hallo, ich bin Rechner Rechnewie. Hier ein paar Tips:",
  'Du kannst jederzeit "/clear" in das Fenster tippen, um eine neue Rechnung zu starten. | ',
  'Du kannst, anstatt eine neue erste Zahl zu wählen, mit "/result" daas Egebnis der vorherigen Rechnung als erste Zahl nehmen und so weiterrechnen. | ',
  'Mit "/stop kannst du den Taschenrechner komplett beenden.',
);

console.log(
  "Rechenzeichen:",
  'Additieren: "+" | ',
  'Subtrahieren: "-" | ',
  'Multiplizieren: "*" | ',
  'Dividieren: "/" | ',
  'Potenzieren: "**" | ',
  'Den Rest, der beim dividieren ohne Kommazahlen entsteht: "%"',
);

while (true) {
  selectNum1();

  if (newCalculation()) {
    console.log("Memory cleared");
    continue;
  }
  if (stopAll()) {
    console.log("Tschüss, ich geh jetzt schlafen. bis ein ander' mal!");
    break;
  }
  if (showHistory()) {
  }
  selectNum2();

  if (newCalculation()) {
    console.log("Memory cleared");
    continue;
  }
  if (stopAll()) {
    console.log("Tschüss, ich geh jetzt schlafen. bis ein ander' mal!");
    break;
  }
  selectCalculationMethod();

  if (newCalculation()) {
    console.log("Memory cleared");
    continue;
  }
  if (stopAll()) {
    console.log("Tschüss, ich geh jetzt schlafen. bis ein ander' mal!");
    break;
  }
  calculate();
  console.log(result);
}
