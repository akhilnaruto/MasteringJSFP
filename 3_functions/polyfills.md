**Polyfills**
<br/>
Being able to assign functions dynamically(same way you assign different values to variables) also allows you to work
more efficiently when defining polyfills

**Detecting Ajax**

In Previous world, where some great people used to work with IE browsers this is what generally novice developers would write code
check ```getAjax``` function in [DetectAjax.js](DetectingAjax.js)

Problem with this is, every function has to have this check, which is like repetitive code. 
there is more efficient way to do this. check ```initializeGetAjax``` function in [DetectAjax.js](DetectingAjax.js)
```initializeGetAjax``` shows two important concepts </br>
    1. we can dynamically assign a function . check ```window.ajax``` </br>
    2. we made ```initializeGetAjax``` as an IIFE function