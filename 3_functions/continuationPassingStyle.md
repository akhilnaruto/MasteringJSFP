**Continuation Passing Style:**
<br /> 
* Generally call back functions can be considered as continuation passing style
       i.e we call a function, but also pass another function that is to be executed when the input/output operation is finished. <br/>
       this can be considered a case of CPS - *"Continuation Passing Style"*
* think what would you do if you are forbidded to return from a function ?<br />
       CPS is the style you would follow right?
* intresting advantage of ths way of coding, is that bu specifying youorself how the process is going to continue, you can go beyond all 
      the usual structures(if, while and so on)
* *BE AWARE that if you are not careful.. you might be going in a pattern of GOTO statements and which will be disastorous*

general pattern people follow for continuation passing style is
```
function doSomeThing(input, ifSuccess, ifError){
    // process input

    // check if error, if error
    ifError()  // call if Error function

    //if success, call sucess function
    ifSuccess()
}
  
```