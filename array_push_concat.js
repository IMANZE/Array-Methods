// array.push(6,7) - Adds elements to the end of array, and returns its new length.
// array.concat(val1, val2, …) - copies multiple arrays values into a single array. 

// let variable = 1;
// variable = "abc";

// const constant = 1;
// constant = 2;

// array = [1,2,3,4,5,6];
// const array = [1,2,3,4,5];

// const l = array.push("abc", 100, 8);
// array.push("abc");
// array.push(100);
// array.push(8);

// console.log(array);
// console.log(l);

const array = [1,2,3,4,5];
const arrayTwo = [6,7,8,9];
const arrayThree = [10,11,12];
const constant1 = "13";
const constant2 = 14;
const constant3 = "15";

const concatArray = array.concat(
    arrayTwo,
    arrayThree,
    constant1,
    constant2,
    constant3
);

console.log("first logging, array unchanged:", array);

array.push(
    arrayTwo,
    arrayThree,
    constant1,
    constant2,
    constant3
);

console.log("second logging, array changed:", array);

// console.log("array one", array);
// console.log("array two", arrayTwo);
// console.log("array three", arrayThree);
