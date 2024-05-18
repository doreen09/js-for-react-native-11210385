function processArray(arr) {
    return arr.map(number => {
      if (number % 2 === 0) {
        return number ** 2;
      } else {
        return number * 3;
      }
    });
  }

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const computedNumbers = processArray(numbers);
  console.log(computedNumbers);