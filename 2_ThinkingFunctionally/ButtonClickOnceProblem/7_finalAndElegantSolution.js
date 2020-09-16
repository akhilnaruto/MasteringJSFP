/*
 woundnt it be great if we could do something after once
 for good user experience
*/

const onceAndAfter = (fn, elseFn) => {
    let done = false;
    return (...args) => {
        if(!done){
            fn(...args);
            done = true;
        }else{
            elseFn(...args);
        }
    }
}

const shouldOnlyRunOnce = () => console.log('you should only see me once');
const fallBackFunction = () => console.log('I am the fall back function');

const onceAndAfterInst =  onceAndAfter(shouldOnlyRunOnce, fallBackFunction);
onceAndAfterInst(); // should print you should only see me once
onceAndAfterInst();// I am the fall back function
onceAndAfterInst();// I am the fall back function'