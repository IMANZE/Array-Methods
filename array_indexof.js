// array.indexOf(2) - returns index of an element or -1 if it is not there.
// array.lastIndexOf(1) - returns last index of an element or -1 if it is not there.
// array.pop() - Removes the last element of an array, and returns that element.

const array = [1,2,3,4,5,4,2];

// '3' === '3' => true

console.log(array.indexOf(4));

console.log(array.indexOf(10));

console.log(array.indexOf('3'));

console.log(array.lastIndexOf(2));

console.log(array.lastIndexOf(10));

const lastArrayElement = array.pop();

console.log(lastArrayElement);
