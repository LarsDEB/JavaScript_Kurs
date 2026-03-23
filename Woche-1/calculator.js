let num1 = null;
let num2 = null;
let rechenzeichen = null;
const rechenzeichenErlaubt = ["+", "-", "*", "/", "**", "%"];
let ergebnis = null;

function num1Wahl() {
  num1 = Number(prompt("Wähle deine erste Zahl:"));
  while (isNaN(num1))
    num1 = Number(
      prompt("Du hast keine gültige Zahl eingegeben. Versuche es nochmal"),
    );
}

function rechenzeichenWahl() {
  rechenzeichen = prompt("Wähle dein Rechenzeichen(+|-|*|/|**|%):");
  while (!rechenzeichenErlaubt.includes(rechenzeichen))
    rechenzeichen = prompt(
      "Du hast kein gültiges Rechenzeichen eingegeben. Versuche es nochmal",
    );
}

function num2Wahl() {
  num2 = Number(prompt("Wähle deine zweite Zahl:"));
  while (isNaN(num2))
    num2 = Number(
      prompt("Du hast keine gültige Zahl eingegeben. Versuche es nochmal"),
    );
}

function rechnen1() {
  num1Wahl();
  rechenzeichenWahl();
  num2Wahl();
  if (rechenzeichen == "+") ergebnis = num1 + num2;
  else if (rechenzeichen == "-") ergebnis = num1 - num2;
  else if (rechenzeichen == "*") ergebnis = num1 * num2;
  else if (rechenzeichen == "/") ergebnis = num1 / num2;
  else if (rechenzeichen == "**") ergebnis = num1 ** num2;
  else if (rechenzeichen == "%") ergebnis = num1 % num2;
}

function rechnenLoop() {
  while (!isNaN(ergebnis) && ergebnis < Infinity) {
    rechenzeichenWahl();
    num2Wahl();
    if (rechenzeichen == "+") ergebnis += num2;
    else if (rechenzeichen == "-") ergebnis -= num2;
    else if (rechenzeichen == "*") ergebnis *= num2;
    else if (rechenzeichen == "/") ergebnis /= num2;
    else if (rechenzeichen == "**") ergebnis **= num2;
    else if (rechenzeichen == "%") ergebnis %= num2;
    console.log("Das Ergebnis ist " + ergebnis);
  }
}


rechnen1();
console.log("Das Ergebnis ist " + ergebnis);
rechnenLoop();
console.log('Das Ergebnis ist zu groß. Starte eine neue Rechnung')


