function billTheUser(some, sales, data){
    document.getElementById('billButton').setAttribute('disabled', true);
    window.alert('billing the user...');
    // actuall bill the user
};

/*
  but all three problems still exists
    1. code is tightly coupled to button, will not be able to re-use
  2. need to reset the handler after billing
  3. testing is difficult

*/