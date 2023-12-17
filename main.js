// 1.

// const numbers = [1, 2, 3, 4, 5, 6];

// function getEvenNumbers(array) {
//     const count = [];
// for (let i = 0; i < array.length; i++) {
//   if (array[i] % 2 === 0) {
//     count.push(array[i]);
//   }

// }
// return count;
// }
// console.log(getEvenNumbers([1, 2, 3, 4, 5, 6]));

// 2
const numbers = [1, 3, 6, 8, 10];

let odd = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 1) {
    odd ++;
  }
}

console.log(odd);

// 3

// function findMax(array) {

//     let max = array[0];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] > max) {

//             max = array[i];

//         }

//     }
//     return max;
// }
// console.log(findMax([5, 1, 9, 3, 10, 4]));

//4

// function findMin(array) {
//     let min = array[0];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] <= min) {
//       min = array[i];
//     }
//   }
//   return min;
// }
// console.log(findMin([5, 1, 9, 3, 10, 4]));

// 5

// function include(array, x) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === x) {
//             return true;
//         }

//     }

//     return false;
// }
// console.log(include([1,3,5],5));

// 6

function concatenate(array) {
    let results = "";
    for (let i = 0; i < array.length; i++) {
        results = results + array[i];

    }
    return results;
}
console.log(concatenate([1,2,3]));

// 7

// function convertToString(array) {
//     const result = [];
//     for (let i = 0; i < array.length; i++) {
//        result.push(String(array[i]));

//     }
//     return result;

// }
// console.log(convertToString([1,2,3]));

// 8

// function sumArray(array) {
//     let sum = 0;
    
//     for (let i = 0; i < array.length; i++) {
//         sum = sum + array[i];
    
        
//     }
//  return sum;   
// }

// console.log(sumArray([1,2,3]));


9;

// let numbers = [1,2,3,4,5];
// for (let i = 0; i < numbers.length; i++) {
//     if (i === 2) {
//         numbers.splice(i,1);
//     }

// }
// console.log(numbers);


// 10

// const a = [1,2,3];
// const b = [4,5,6];
// const c = a.concat(b);
// console.log(c);

