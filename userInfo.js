import { processArray, formatArrayStrings } from './arrayManipulation.js';

function createUserProfiles(names) {
    
  const processedNumbers = processArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const modifiedNames = formatArrayStrings(['Doreen', 'Jessica', 'Edmond', 'Ama'], processedNumbers);

  return names.map((name, index) => ({
    originalName: name,
    modifiedName: modifiedNames[index],
    id: index + 1
    
  }));
  
}

const userProfiles = createUserProfiles(['Doreen', 'Jessica', 'Edmond', 'Ama']);
console.log(userProfiles);