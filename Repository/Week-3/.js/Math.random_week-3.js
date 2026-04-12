let a = 0;
let b = 10;
const randomNum = (a, b) => {
  return Math.floor(Math.random() * (b - a + 1)) + a;
};
console.log(`Du hast eine ${(a = randomNum(1, 6))} gewürfelt!`);
console.log(`Du hast eine ${(b = randomNum(1, 6))} gewürfelt!`);
if (a > b) console.log('Der Erste hat gewonnen!');
else if (a < b) console.log('Der Zweite hat gewonnen!');
else if (a === b) console.log('Unentschieden!');

const calc = [
  '10 + 4',
  '7 * 3',
  '20 / 5',
  '9 - 2',
  '6 ** 2',
  '64 * 64',
  '2 ** 16',
  '8 + 96',
  '256 * 16',
  '96 / 8',
];
const selectCalc = () => Math.floor(Math.random() * calc.length);
console.log(calc[selectCalc()]);
