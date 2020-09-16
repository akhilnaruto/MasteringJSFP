const x = [1,2,3];

function sum3(a, b, c){
    return a+b+c;
}

const y = sum3(...x);
//console.log(y);

// spread on arrays
const f = [1,2,3];
const g=[4, ...f, 5];
// console.log(g);
// console.log(...f, ...g);

//spread on objects
const p = {some: 3, data: 5};
const q = {more: 8, ...p};
// console.log(p);
// console.log(q);

//spread on functions
const numbers = [2, 2, 9, 6, 0, 1, 2, 4, 5, 6];
const minA = Math.min(...numbers);
console.log(minA);

const maxA = Math.max(...numbers);
console.log(maxA);