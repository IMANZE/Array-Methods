// array.splice(-6, 5) <-- MUTATING
// array.slice(-6, 5) <-- NON-MUTATING

// const array = [1,2,3,4,5];
// // const arrayTwo = array;
// const arrayTwo = array.slice();

// arrayTwo.push(6);

// console.log(array);
// console.log(arrayTwo);

// NEGATIVE VALUES

const array = [1,2,3,4,5];
const result = array.slice(-5, 3);

console.log(result);