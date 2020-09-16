function billTheUser(some, sales, data){
    document.getElementById('billButton').onClick =  alreadyBilled;
    window.alert('billing the user...');
    //actual billing
}

function alreadyBilled(){
    window.alert('your billing process is running, dont click again please');
}

/*
  we are using functions as first class objects here, by assigning alreadyBilled function
  and one good point is there is good user experience, we are telling user that

  but all three problems still exists
    1. code is tightly coupled to button, will not be able to re-use
  2. need to reset the handler after billing
  3. testing is difficult

*/