let myLog =  someText => {
    if(DEVELOPMENT){
        console.log('some text');
    }else{
        //do nothing
    }
}

// better way(stubbing out logging function) since we are using const.. cannot be modifid
const myLog =  DEVELOPMENT 
     ? someText => console.log('someText')
     : someText => {};