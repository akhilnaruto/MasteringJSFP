const altSum3 =  x => y => z=> x + y + z;

// console.log(altSum3(1,2,3));   this will not work..  Function will be printed here

//console.log(altSum3(1)(2)(3)); // 6 is printed

// above is equivalent to
let fun1 =  altSum3(1);
let fun2 = fun1(2);
let ans = fun2(3);
console.ans(fun3);
