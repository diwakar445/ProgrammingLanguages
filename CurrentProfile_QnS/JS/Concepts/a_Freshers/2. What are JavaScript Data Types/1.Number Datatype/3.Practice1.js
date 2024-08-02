let a1 = 1;
let a2 = 1.23;
let a3 = 1.23e5;
let a4 = 1.23e-5;
let a5 = 0b1010;
let a6 = 0o12;
let a7 = 0xA;
//let a8 = Infinity ,NaN, 12; //JavaScript doesn't support multiple assignments in a single variable declaration
let a8 = Infinity, b8 = NaN, c8 = 12;
let values = [Infinity, NaN, 12];
let values1 = { a: Infinity, b: NaN, c: 12 };

let a81 = new Number(123);
let a9 = Math.sqrt(4);
let a10 = Math.round(1.23);
//The syntax is parseInt(string, radix).
let a11 = parseInt("123",8); // string , radix(base) // 
let a12 = parseFloat("1.23");
let a13 = 123456n;
//console.log(a11);
//------------deciaml - base - systems----------------------
let binary = "0b1010"
let int = parseInt(binary, 16);
console.log(int);
// A. the first operand can be a string, second can be of it's radix. 
// B. binary , octal, hexadecimal , second would be 10 always.
//parseInt(0b1010, 10); // 10
//parseInt("1010", 2); // 10
//parseInt("12", 8); // 10
//parseInt("A", 16); // 10