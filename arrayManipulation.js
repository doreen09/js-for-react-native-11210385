function processArray(arr) {
    return arr.map(number => {
      if (number % 2 === 0) {
        return number ** 2;
      } else {
        return number * 3;
      }
    });
  }

function formatArrayStrings(stringArray, numberArray) {
    return stringArray.map((str, index) => {
      if (numberArray[index] % 2 === 0) {
        return str.toUpperCase();
      } else {
        return str.toLowerCase();
      }
    });
  }


  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const computedNumbers = processArray(numbers);
  const names = ['John', 'Jane', 'Bob', 'Alice'];
  const modifiedNames = formatArrayStrings(names, computedNumbers);
 
  console.log(computedNumbers);
  console.log(modifiedNames);