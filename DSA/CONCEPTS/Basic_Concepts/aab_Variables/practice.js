
console.log("Hoisting before Initialization");
console.log('a',a); // undefined
//console.log('b',b); // cannot access b before Initialization
//console.log('c',c); // cannot access b before Initialization

var a; let b; const c = 10;


console.log("Hoisting after Initialization");
console.log('a',a); // 1
console.log('b',b); // 2
console.log('c',c); // 10

a = 1; b = 2;

console.log("Hoisting after Initialization & Assignment");
console.log('a',a); // 1
console.log('b',b); // 2
console.log('c',c); // 10



