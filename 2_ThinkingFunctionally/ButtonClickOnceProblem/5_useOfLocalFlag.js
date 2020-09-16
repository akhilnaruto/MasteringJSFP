console.log('start');
var billTheUser = (clicked => {
     return (some, sales, data) => {
         if(!clicked){
             clicked = true;
             console.log('Billing the user ...');
         }
     }
})(false);
billTheUser();
billTheUser();
billTheUser();
billTheUser();



/*
 there will be only one console log
 how it works -->
   we are creating an IIFE which will create a private variable clicked(assigned to false) in higher order function..
   and will return the actual bill the user function

   when we call billTheUser first time, since clicked is false, it will execute first time and we are making it true in the execution
   when we call billTheUser next time since clicked is true, we will not see any console log statement.. YAY..

   This is good solution, but if we want this one time feature enabled to any other functions, it cannot be done
   we have to re-write all functions with above approach(violates DRY principle)

*/