/*
  what we are looking for

  1. we dont want to modify existing function 
  2. we need to have a new function that will call original function only once.
  3. we need general solution which can be applied to any number of original solutions

*/

const once = fn => {
     let done = false;
     return (...args) => {
         if(!done){
             done = true;
             fn(...args);
         }
     }
};

function billTheUser(some, sales, data){
    console.log(`billing the user ${some}, ${sales}, ${data}`);
}

let billUserOnce = once(billTheUser);
billUserOnce(1,2,3);
billUserOnce(4,5,6);
/*

whats happening here
 1. created a once function (that is what we wanted to do). which will take original function as argument
 2. created a done variable. we are using closure here.. done will be accessible to inner functions(not sure inner is the terminology here)
 4.(...args) indicates that we are returning a function, expecting 0 or more arguments
 5. if done is false, we are calling the function with arguments


 once() uses functions as first class objects. 
            arrow functions
            closures
            spread operator

*/