 const { log } = require("console");

// Dubey("Deepti");
// //hoisting
// function Dubey(name){
//     console.log("welcome  " +  name);
// }

// //This
// var obj= {
//   name :  "Deepti",
//   getName : function(){
//     console.log(this.name);
//   }
// }
// obj.getName();

// //lexical scope
// var x=5;
// var add = function(){
//     var y= 1;
//     return x+y;
// };
// var lex = add()
// console.log(lex);

// //closure
// function Deepti(){
//     var name = "Dubey";
//     function displayName(){
//         console.log(name);
//     };
//     return displayName;
// }

// var myFunc = Deepti();
// myFunc();



// //function scope 

// function jobFair(){
//   let msg = "You will get job here";
//   console.log(msg);
// }

// //console.log(msg);
// jobFair();

//block scope
// function jobFair(){
//   let msg = "You will get job here";
//   console.log(msg);
//   if(true){
//   let msg = "It is block scope";
//   console.log(msg);
//   }
// }

// jobFair();

// // rest perameter
// // Function that takes any number of arguments and returns their sum
// function sum(...numbers) {
//   //return numbers.reduce((acc, curr) => acc + curr, 0);
//   let total = 0;
//   for (const num of numbers) {
//     total += num;
//   }
//   return total;
// }

// function add(...args){
//   let sum=0;
//   let i=0;
//   while(i<args.length){
//     sum += args[i];
//     i++;
//   }
//   return sum;
// }

// // Using the sum function with different numbers of arguments
// console.log(add(6, 2, 3));           // Output: 6
// console.log(sum(10, 20, 30, 40));    // Output: 100
// console.log(sum(2, 4, 6, 8, 10));    // Output: 30
// console.log(sum(5));                // Output: 5
// console.log(sum());                 // Output: 0


// function* numberGenerator(i) {
//   // let num = 0;
//   // while (true) {
//   //   yield num;
//   //   num++;
//   yield i;
//   yield i*10;
//   }


// // Creating a generator iterator
// const iterator = numberGenerator(5);

// // Calling `next()` on the iterator will execute the generator until the next `yield` statement
// console.log(iterator.next().value); // Output: 0
// console.log(iterator.next().value); // Output: 1
// console.log(iterator.next().value); // Output: 2
// // and so on...


//functional chaining

// function parent(){
//   var name = "Deepti";
//   console.log(name);
//   console.log(age);
//   console.log(place);

//   function child(){
//     var age = 24;
//   console.log(name);
//   console.log(age);
//   console.log(place);
  
//   function grandchild(){
//     var place = "Sagar";
//   console.log(name);
//   console.log(age);
//   console.log(place);
//   }
//   grandchild();
// }
// child();
// }
// parent();


//promise

// function sumOfNumbers(...numbers) {
//   return new Promise((resolve, reject) => {
//     // Algorithm: Sum all the input numbers
//     const sum = numbers.reduce((acc, num) => {
//       if (typeof num !== "number" || isNaN(num)) {
//         reject("Error: All inputs must be numbers.");
//       }
//       return acc + num;
//     }, 0);

//     // Simulating an asynchronous operation with a delay
//     setTimeout(() => {
//       resolve(sum);
//     }, 1000); // Delay of 1 second
//   });
// }

// // Using the Promise function to calculate the sum of numbers
// sumOfNumbers(2, 3, 'a')
//   .then((result) => {
//     console.log("Sum of numbers:", result);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });


  function sumOfNumbers(...numbers) {
    return new Promise((resolve, reject) => {
       if (numbers.length>3){
        reject("only three elements or less are allowed")
       }
       else{
        let sum = 0;
        let i=0;
        while(i< numbers.length){
          sum += numbers[i];
          i++;
        }
        resolve("Sum has been calculated: " +sum);
       }
})
}

sumOfNumbers(4,5,6)
.then(result => console.log(result))
.catch(error => console.log(error));