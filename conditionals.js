// var a = 5;
// var b = 3;
// console.log(a-b); //2

// *****************************

// var a = '12';
// var b = '3';
// var result = a/b;
// console.log(typeof result);
// console.log(a/b); // 4

// *****************************

// let x = 100 + 50*3;  // 250, önce carpma islemi yapilir
// console.log(x);

// *****************************

// Logical Operators && || !

// OR ||       And &&   Not !

// let x = 0 && false;
// console.log(x); // 0

// *****************************

// let y = 2 || 3;
// console.log(y); // 2

// *****************************

// let y = false || 3;
// console.log(y); // 3

// *****************************

// let y = 0 || 1;
// console.log(!y); // false , verilen degerin boolean tersini döndürür

// *****************************

// ".lenght" stringin uzunlugunu verir 
// let password = 'passw';
// console.log(password.length >= 5); // true

// *****************************

// ".includes('@')" true veya false verir 
// let password = 'passwo';
// console.log(password.length > 5 && password.includes('@')); // false

// ****************************

// let password = 'p@s';
// console.log(password.length >= 5 || password.includes('@') && password.length > 5); // false

// ****************************

// Nullish operator

// var a = null;
// console.log(a ?? 'Hello'); // null vs text output text
// console.log(a ?? 2); // null vs text output text

// ****************************

// var a;

// console.log(a ?? 'Hello'); // undefined vs text output text
// console.log(a ?? 2); // undefined vs text output text

// ****************************

var a = '';

console.log(a ?? 2); // bos string vs text output text

// ****************************