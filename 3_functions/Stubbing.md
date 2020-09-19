**Stubbing**

UseCase: Having a function do diffeent work depending on the environment. This idea is called *stubbing* 

common usecase is the usage of loggin functions. </br>

You may want the application to do detailed logging when in development.
but not to run when in production. general common solution to this problem, most people follow is ```myLog```  from [Stubbing.js](stubbing.js)
but we can do it better by stubbing out logging function.