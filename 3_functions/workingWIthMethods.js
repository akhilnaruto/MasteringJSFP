// unnecessary mistake
fetch("some/resource/url").then(function(data){
    processResult(data);
})

// above is unnecessary...instead of above we can do this
fetch("some/resource/url").then(processResult);

// what if if we are calling a function on an object
fetch("some/resource/").then(function(data){
    myObject.processResult(data);
})

// below WILL NOT WORK
// why it will not work--> method is not bound to myObject
fetch("some/resource/").then(myObject.processResult); // WILL NOT WORK

// below will work
fetch("some/resource/").then(myObject.processResult.bind(myObject));