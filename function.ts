function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log('Result: ' + num);
  return;
  // return num.toString();
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(20, 10, (result) => {
  console.log(result);
  return result;
})

let combinedValues: (a: number, b: number) => number;
combinedValues = add;
// combinedValues = printResult;

// console.log(combinedValues(8, 8));

// printResult(add(5, 12));

