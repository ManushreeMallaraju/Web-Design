
// function callAfterThreeSeconds() {
//     const time = 3;
//     console.log(`Called after : ${time} seconds`);
// }

//callAfterThreeSeconds();

// setTimeout( callback function , delay) // takes in two arguments


/**Anonymous arrow function
 * () => {

   }
 */
// console.log('Statement 1')

setTimeout(callAfterThreeSeconds = () => {
  const time = 3;
  console.log(`Called after : ${time} seconds`);
}, 3000);

// console.log('Statement 2')

// function f2() {
//     console.log('f2');
// }

// f2();

const arrayOfNumbers = [10, 20, 30, 40, 50];

let results = [];

// TODO: Multiply each array element by 2 and add it to the result

for (let i = 0; i < arrayOfNumbers.length; i++) {

  results.push(arrayOfNumbers[i] * 2);
  //results[] = arrayOfNumbers[0] = 10 * 2
}

console.log(arrayOfNumbers);
console.log(results);

// Things with .map() -> is a higher order function used on arrays..;

// const result2 = arrayOfNumbers.map((element) => { // elements points to array elements
//     return element * 2;
// })

const result2 = arrayOfNumbers.map(element => element * 2)

console.log(`Obtained from map() : ${result2}`);

