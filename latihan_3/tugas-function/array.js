function squareNumbers(numbers) {
  return numbers.map(number => number * number);
}

const arr = [1, 2, 3, 4, 5];
const squaredArr = squareNumbers(arr);

console.log(squaredArr);