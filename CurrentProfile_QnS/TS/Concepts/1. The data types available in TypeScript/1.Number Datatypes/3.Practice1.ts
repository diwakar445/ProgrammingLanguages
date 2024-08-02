//converting string representaion of binary,octal,hexadecimal numbers to intergers/decimal numbers
let str: string = "1010";
let str1: string = "12";
let str2: string = "A";
// input parameters : str , radix(represents base of the str)
let int0: number = parseInt(str,2);
let int1: number = parseInt(str1,8);
let int2: number = parseInt(str2,16);
//console.log(int, typeof(int) + ' base 10'); // number/decimal 10
//console.log(int1, typeof(int1) + ' base 10'); // number/decimal 10
//console.log(int2, typeof(int2) + ' base 10'); // number/decimal 10

// converting binary,octal,hexadeciamal number notations to string deciaml numbers
let binary0: number = 0b1010; // binary in number notation
let octal: number = 0o12; // octal in number notation
let hexadeciaml: number = 0xA; // hexadeciaml in number notation
let num1: string = binary0.toString(); // string 10 let num1: string = binary.toString(10); 
let num2: string = octal.toString(10); // string 10
let num3: string = hexadeciaml.toString(10); // string 10
//console.log(num1, typeof(num1) + ' base 10');
//console.log(num3, typeof(num3) + ' base 10');
//console.log(num2, typeof(num2) + ' base 10');

// converting decimal numbers to any radix = 2,8,16 base numbers using toString() method

let number: number = 10;
let bin: string = number.toString(2); // coverts to string notation of base 2
console.log(bin, typeof(bin) + ' base 2');

let number1: number = 10;
let bin1: string = number1.toString(8); // coverts to string notation of base 8
console.log(bin1, typeof(bin1) + ' base 8');

let number2: number = 10;
let bin2: string = number2.toString(16); // coverts to string notation of base 16
console.log(bin2, typeof(bin2) + ' base 16');