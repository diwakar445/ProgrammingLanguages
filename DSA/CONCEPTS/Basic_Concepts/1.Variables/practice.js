// var varaible types & function declarations are only hoisted. **: undefined
// let, const, are not hoisted instead are in the TDZ. **: cannot access b before Initialization (Temporal Dead Zone) no memory is allocated
// not defined variables are not hoisted, **: not defined

console.log("Hoisting before Initialization");
console.log('a',a); // undefined
//console.log('b',b); // cannot access b before Initialization (Temporal Dead Zone) no memory is allocated
//console.log('c',c); // cannot access b before Initialization (Temporal Dead Zone) no memory is allocated
//console.log('d',d); // d is not defined

var a; let b; const c = 10;
d = "Declaration with No variabe type";


console.log("Hoisting after Initialization");
console.log('a',a); // 1
console.log('b',b); // 2
console.log('c',c); // 10
console.log('d',d);

a = 1; b = 2;

console.log("Hoisting after Initialization & Assignment");
console.log('a',a); // 1
console.log('b',b); // 2
console.log('c',c); // 10
console.log('d',d);



