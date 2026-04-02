let historyList = [];
const calculationMethodList = ['+', '-', '*', '/', '**', '%'];

const calcStates = {
  num1: null,
  calculationMethod: null,
  num2: null,
  result: null,
};

const calculations = {
  '+': (a, b) => (calcStates.result = a + b),
  '-': (a, b) => (calcStates.result = a - b),
  '*': (a, b) => (calcStates.result = a * b),
  '/': (a, b) => (calcStates.result = a / b),
  '**': (a, b) => (calcStates.result = a ** b),
  '%': (a, b) => (calcStates.result = a % b),
};

const inputTextObject = {
  num1: {
    start: () => 'Gib die erste Zahl ein.',
    noResult: () => 'Es gibt keine vorherige Rechnung! Versuche etwas anderes.',
    overflow: () =>
      'Das Ergebnis der letzten Rechnung ist "Overflow". Das kann nicht als Zahl genommen werden! Mache etwas anderes.',
    incorrectNum: (input) =>
      `"${input}" ist keine gültige Zahl und kein gültiger Command! Versuche es nochmal.`,
  },
  calculationMethod: {
    start: () => `Gib Gib ein Rechenzeichen ein.(${calculationMethodList.join(' | ')})`,
    incorrectCalcMethod: (input) =>
      `"${input}" ist kein gültiges Rechenzeichen und kein gültiger Command! Versuche es nochmal. Gültige Rechenzeichen: (${calculationMethodList.join(' | ')})`,
  },
  num2: {
    start: () => 'Gib die zweite Zahl ein.',
    noResult: () => 'Es gibt keine vorherige Rechnung! Versuche etwas anderes.',
    overflow: () =>
      'Das Ergebnis der letzten Rechnung ist "Overflow". Das kann nicht als Zahl genommen werden! Mache etwas anderes.',
    incorrectNum: (input) =>
      `"${input}" ist keine gültige Zahl und kein gültiger Command! Versuche es nochmal.`,
  },
};

function calculate() {
  const { num1, calculationMethod, num2 } = calcStates;
  const result = calculations[calculationMethod](num1, num2);
  calcStates.result = result;
  return result;
}

function showCalc(result) {
  if (!Number.isFinite(result))
    return console.log(
      'Entweder, das Ergebnis ist zu hoch oder zu niedrig, oder die Rechnung ist ungültig! (z.B.: "0/...")'
    );
  else {
    const { num1, calculationMethod, num2 } = calcStates;
    console.log(`${num1} ${calculationMethod} ${num2} = ${result}`);
  }
}

function getInputText(inputType, inputErrorType, input) {
  if (inputTextObject[inputType][inputErrorType])
    return inputTextObject[inputType][inputErrorType](input);
  else
    return 'Ein Fehler ist aufgetreten. Du kannst nichts dafür, probiere das Programm neu zu starten, ansonsten kontaktiere uns bitte, damit wir den Fehler beheben können.';
}

function getInput(inputType) {
  let inputErrorType = 'start';
  let input;
  while (true) {
    const inputText = getInputText(inputType, inputErrorType, input);
    inputErrorType = 'start';
    input = prompt(inputText);
    const isCommand = checkCommand(input, inputType);
    switch (isCommand.status) {
      case 'stop':
        return isCommand;
      case 'new':
        return isCommand;
      case 'clear':
        calcStates.result = null;
        historyList = [];
        console.log('Memory cleared');
        return isCommand;
      case 'history':
        console.log(checkHistory().value);
        continue;
      case 'result':
        const prevResult = checkPreviousResult().value;
        if (prevResult === 'overflow') {
          inputErrorType = 'overflow';
          continue;
        }
        if (prevResult === 'noResult') {
          inputErrorType = 'noResult';
          continue;
        } else return (calcStates[inputType] = prevResult);
      default:
        break;
    }
    if (inputType !== 'calculationMethod') {
      const numberCheck = checkNumber(input);
      if (numberCheck.status === 'correctNum') return (calcStates[inputType] = numberCheck.value);
      else {
        inputErrorType = 'incorrectNum';
      }
    } else if (inputType === 'calculationMethod') {
      const calcMethodCheck = checkCalculationMethod(input);
      if (calcMethodCheck.status === 'validCalcMethod')
        return (calcStates[inputType] = calcMethodCheck.value);
      else {
        inputErrorType = 'incorrectCalcMethod';
      }
    }
  }
}

function checkCommand(input, inputType) {
  if (inputType !== 'calculationMethod') {
    if (input === '/result') {
      return checkPreviousResult();
    }
  }
  if (input === '/stop') return { status: 'stop', value: null };
  if (input === '/new') return { status: 'new', value: null };
  if (input === '/clear') return { status: 'clear', value: null };
  if (input === '/history') return { status: 'history', value: String(historyList.join(' | ')) };
  else return { status: 'noCommand', value: null };
}

function checkPreviousResult() {
  if (calcStates.result === null) return { status: 'result', value: 'noResult' };
  if (calcStates.result === 'Overflow') return { status: 'result', value: 'overflow' };
  else return { status: 'result', value: Number(calcStates.result) };
}

function checkHistory() {
  if (historyList.length !== 0) return { status: 'history', value: historyList.join('|') };
  else
    return {
      status: 'history',
      value: 'Keine vorherigen Rechnungen!',
    };
}
function addHistoryItem() {
  historyList.push(
    `"${calcStates.num1} ${calcStates.calculationMethod} ${calcStates.num2} = ${calcStates.result}"`
  );
}

function checkNumber(input) {
  if (isNaN(input)) {
    return { status: 'noNumber', value: null };
  } else return { status: 'correctNum', value: Number(input) };
}

function checkCalculationMethod(input) {
  if (calculationMethodList.includes(input))
    return { status: 'validCalcMethod', value: String(input) };
  else return { status: 'invalidCalcMethod', value: null };
}

console.log(
  `Hier ein paar Tips:
  - Du kannst, anstatt eine neue Zahl zu wählen, mit "/result" daas Egebnis der vorherigen Rechnung als Zahl nehmen und so weiterrechnen.
  - "/new" startet eine neue Rechnung.
  - Du kannst jederzeit "/clear" in das Fenster tippen, um das Gedächtnis zu löschen.
  - Mit "/stop" kannst du den Taschenrechner komplett beenden.
  - Um dir alle bisherigen Rechnungen anzuzeigen, gib "/history" ein.`
);

console.log(
  `Rechenzeichen:
  Additieren: "+" | Subtrahieren: "-" | Multiplizieren: "*" | Dividieren: "/" | Potenzieren: "**" | Den Rest, der beim dividieren ohne Kommazahlen entsteht: "%"`
);

run: while (true) {
  const inputNum1 = getInput('num1');
  if (inputNum1.status === 'stop') break;
  if (inputNum1.status === 'new') continue;
  if (inputNum1.status === 'clear') continue;

  const inputCalcMethod = getInput('calculationMethod');
  if (inputCalcMethod.status === 'stop') break;
  if (inputCalcMethod.status === 'new') continue;
  if (inputCalcMethod.status === 'clear') continue;

  const inputNum2 = getInput('num2');
  if (inputNum2.status === 'stop') break;
  if (inputNum2.status === 'new') continue;
  if (inputNum2.status === 'clear') continue;

  const { num1, calculationMethod, num2 } = calcStates;
  showCalc(calculate());
  addHistoryItem();
}
console.log('Tschüss!');
