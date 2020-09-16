function billTheUser(some, sales, data){
    document.getElementById('billButton').onClick =  null;
    window.alert('Billing the user ...');
    //actual billing
}

/*
  Problems
  1. code is tightly coupled to button, will not be able to re-use
  2. need to reset the handler after billing
  3. testing is difficult


  though bit flexibility can be providied by exteding the function to take button id 
  as parameter. still this doesnt solve above problems
*/

function billTheUser(buttonId, some, sales, data){
    document.getElementById(buttonId).onClick =  null;
    window.alert('Billing the user ...');
    //actual billing
}
