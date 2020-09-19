function ShowItSelf(identity){
   this.identity = identity;
   setTimeout(() => {
       console.log(this.identity);
   }, 1000);    
}

var a =  new ShowItSelf("Functional");


function ShowItself2(identity) {
    this.identity = identity;
    let that = this;
    setTimeout(function() {
        console.log(that.identity);
    }, 1000);

    setTimeout(
        function() {
            console.log(this.identity);
        }.bind(this),
        2000
    );

    setTimeout(() => {
        console.log(this.identity);
    }, 3000);
}
var x = new ShowItself2("JavaScript");
