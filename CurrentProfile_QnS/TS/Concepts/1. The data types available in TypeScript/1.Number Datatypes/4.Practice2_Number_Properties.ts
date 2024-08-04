let numb0: number = Number.MAX_VALUE;
let numb1: number = Number.MIN_VALUE;
let numb2: number = Number.POSITIVE_INFINITY;
let numb3: number = Number.NEGATIVE_INFINITY;
let numb4: number = Number.NaN;

console.log(numb0);
console.log(numb1);
console.log(numb2);
console.log(numb3);
console.log(numb4);

let a: number = Number.MAX_VALUE; // 1.8e308
let b: number = Number.MIN_VALUE; // 5e-324
let c: number = Number.NaN; // indicate the value which is not a number
let d: number = Number.POSITIVE_INFINITY; // Corresponds to value greater than MAX_VALUE
let e: number = Number.NEGATIVE_INFINITY; // Represents the value less than MIN_VALUE
console.log(a, typeof(a));
console.log(b, typeof(b));
console.log(c, typeof(c));
console.log(d, typeof(d));
console.log(e, typeof(e));

//let bigint: bigint = 12n;
let bigint: bigint = BigInt(a); //
bigint > a ? true : false // true



