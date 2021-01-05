function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log('Result: ' + num);
  return;
  // return num.toString();
}

let combinedValues: (a: number, b: number) => number;
combinedValues = add;
// combinedValues = printResult;

console.log(combinedValues(8, 8));

// printResult(add(5, 12));

