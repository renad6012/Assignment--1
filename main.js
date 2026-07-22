//A. Part 1: Coding Questions:
//Q1:
// let x="123";
// let y=7;
// let result= x*1+7 ;
// console.log(result);
//___________________________________________________
//Q2:
// function checkValue(input) {
//     let falsyValues = [false, 0, "", null, undefined, NaN];
//
//     if (falsyValues.includes(input)) {
//         return "Invalid";
//     }
//
//     return "Valid";
// }
//
// console.log(checkValue(0));
//______________________________________________________
//Q3:
// for (let i = 1; i <= 10; i++) {
//     if (i % 2 === 0) {
//         continue;
//     }
//
//     console.log(i);
// }
//________________________________________________________
//Q4:
// let numbers = [1, 2, 3, 4, 5];
//
// let evenNumbers = numbers.filter(function(num) {
//     return num % 2 === 0;
// });
//
// console.log(evenNumbers);
//_________________________________________________________
//Q5:
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
//
// let merged = [...arr1, ...arr2];
//
// console.log(merged);
// //_________________________________________________________
// //Q6:
// let day = 2;
//
// switch (day) {
//     case 1:
//         console.log("Sunday");
//         break;
//
//     case 2:
//         console.log("Monday");
//         break;
//
//     case 3:
//         console.log("Tuesday");
//         break;
//
//     case 4:
//         console.log("Wednesday");
//         break;
//
//     case 5:
//         console.log("Thursday");
//         break;
//
//     case 6:
//         console.log("Friday");
//         break;
//
//     case 7:
//         console.log("Saturday");
//         break;
//
//     default:
//         console.log("Invalid day");
// }
//____________________________________________________________
//Q7:
// let words = ["a", "ab", "abc"];
//
// let lengths = words.map(word => word.length);
//
// console.log(lengths);
//______________________________________________________________
//Q8:
// const checkNumber=(number)=>{
//     if((number % 3 === 0 && number % 5 === 0))
//     {
//         return "Divisible by both";
//     }
//     else{
//        return "Not divisible by both";
//     }
// }
// console.log(checkNumber(15));
//________________________________________________________________
//Q9:
// const squareNum = (num) =>
// {
//     return num * num;
// };
//
// console.log(squareNum(5));
//__________________________________________________________________
//Q10:
// const person = {
//     name: "John",
//     age: 25
// };
//
// function getPersonInfo({ name, age }) {
//     return name + " is " + age + " years old";
// }
//
// console.log(getPersonInfo(person));
//_____________________________________________________________________
//Q11:
//______________________________________________________________________
//Q12:
// function getMessage() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             resolve("Success");
//         }, 3000);
//     });
// }
//
// getMessage().then(function (result) {
//     console.log(result);
// });
//_________________________________________________________________________
//Q13:
// function findLargest(numbers) {
//     let largest = numbers[0];
//
//     for (let i = 1; i < numbers.length; i++) {
//         if (numbers[i] > largest) {
//             largest = numbers[i];
//         }
//     }
//
//     return largest;
// }
//
// console.log(findLargest([1, 3, 7, 2, 4]));
//___________________________________________________________________________
//Q14:
// function getKeys(obj) {
//     return Object.keys(obj);
// }
//
// const data = {
//     name: "John",
//     age: 30
// };
//
// console.log(getKeys(data));
//_______________________________________________________________________________
//Q15:
// function splitWords(str) {
//     return str.split(" ");
// }
//
// console.log(splitWords("The quick brown fox"));
//__________________________________________________________________________________
//__________________________________________________________________________________
//__________________________________________________________________________________

