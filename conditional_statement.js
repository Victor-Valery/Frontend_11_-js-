// if else statement

// let score = 49;
// console.log(score >=50);

// if (!(score >= 50)){
//     console.log('Congratulate');
// }

// ************************** 

// let score = 50;

// if (score >= 50){
//  console.log('Congratulate');
// }
// if (score>= 50) console.log('Congratulate2');

// ************************** 

// let score = 50;

// if (score > 80) {
//     console.log('Congrats');
// }
// else {
//     console.log('You must work');
// }

// ************************** 

// let score = 81;

// // if (score > 80) {
// //     console.log('Congrats');
// // }
// // else {
// //     console.log('You must work');
// // }

// // Ternary Operator condition ? exprIftrue : exprIfFalse

// score > 80 ? console.log('Congrats2') : console.log('You must work2');


// ************************** 

// let score = 70;

// if (score > 80) {
// console.log('Congrats');
// }
// else if (score >= 50) {
//      console.log('Not bad');
// }
// else {
//     console.log('You must work');
// }

// ************************** 

// let score = prompt("What is yor exam note?"); // notu kullanicidan al

// if (score > 80) {
// console.log('Congrats');
// }
// else if (score >= 50) {
//      console.log('Not bad');
// }
// else {
//     console.log('You must work');
// }

// ************************** 

// let userName = 'Victor';

// userName ? console.log(`Hello ${userName}`) : console.log('Please login');

// ************************** 

// If else if ternary

// let score = 49;

// score > 80 ? console.log('Congrats'):
// (score >= 50 ? console.log('Not bad') : console.log('You must work'));

// ************************** 

// Switch Case Statements

// var text;
// var fruits2 = 'APple'; //===
// fruits = fruits2.toLowerCase();

// switch (fruits) {
//     case "banana":
//         text = "Banana is good.";
//         break;
//     case "orange":
//         text = "I am not a fan of orange.";
//         break;
//     case "apple":
//         text = "How you like them apples?.";
//         break;
//     default:
//         text = "I have never heard of that fruit ..."
// }
// console.log(text);
// console.log(fruits2, text);

// toLowerCase()

// ************************** 


// Bir gün degiskeni
// Switch case pzt - cars - pers - cmt in class
// sali ve cuma ise TW var
// Pazar günü tatil

var day = prompt("Enter a day: ");
var day = day.toLowerCase();
var text;
switch (day) {
    case "monday":
    case "wednesday":
    case "thursday":
    case "saturday":
        text = "In class";
        break;
    case "tuesday":
    case "friday":
        text = "Teamwork";
        break;
    case "sunday":
        text = "Holiday";
        break;
    default:
        text = "You entered wrong."
}
console.log(text);