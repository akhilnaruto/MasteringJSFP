let clicked =  false;

function billTheUser(some, sales, data){
    if(!clicked){
        clicked = true;
        window.alert('billing the user...');
        // actually bill the user
    }
}

/*
  Problems:
  1. Using global variable, variable can be changed by accident and when it does.. go to hell again
     Generally Global variables are not a good idea
  2. after billing is complete, we have to remember to re-initialize to false. 
  3. difficut to test , since billTheUser is dependent on external variables   

*/