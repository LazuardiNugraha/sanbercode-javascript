// === Tipe Data Primitif ===
let num1 = 42;
let num2 = 3.14;
let str = "Hello World!";
let bool = true;
let bigIntNum = BigInt(1234567890123456789);
let sym = Symbol("symbol");
let undef;
let n = null;

// === Tipe Data Non-Primitif ===
let obj = { name: "John", age: 25 };
let arr = [1, 2, 3, 4, 5];
let func = function() {
  return "Ini sebuah function!";
}

// Operator Aritmatika
let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;
let modulus = num1 % 5;

// Operator Perbandingan
let isEqual = (num1 == 42);
let isStrictEqual = (num1 === 42);
let isNotEqual = (num1 != 50);
let isGreater = (num1 > num2);
let isLessOrEqual = (num1 <= num2);

// Output
console.log('=== Tipe Data Primitif ===');
console.log('Number (Integer):', num1);
console.log('Number (Floating Point):', num2);
console.log('String:', str);
console.log('Boolean:', bool);
console.log('BigInt:', bigIntNum);
console.log('Symbol:', sym);
console.log('Undefined:', undef);
console.log('Null:', n);

console.log('\n=== Tipe Data Non-Primitif ===');
console.log('Object:', obj);
console.log('Array:', arr);
console.log('Function:', func());

console.log('\n=== Operator Aritmatika ===');
console.log('Penjumlahan (num1 + num2):', sum);
console.log('Pengurangan (num1 - num2):', difference);
console.log('Perkalian (num1 * num2):', product);
console.log('Pembagian (num1 / num2):', quotient);
console.log('Modulus (num1 % 5):', modulus);

console.log('\n=== Operator Perbandingan ===');
console.log('Apakah num1 == 42?', isEqual);
console.log('Apakah num1 === 42?', isStrictEqual);
console.log('Apakah num1 != 50?', isNotEqual);
console.log('Apakah num1 > num2?', isGreater);
console.log('Apakah num1 <= num2?', isLessOrEqual);