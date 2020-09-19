function getAjax(){
    let ajax = null;
    if(window.XMLHttpRequest){
        // for modern browsers
        ajax =  new XMLHttpRequest()
    }else if(window.ActiveXObject){
        // bad IE5 and IE6
        ajax =  new ActiveXObject('Microsoft.XMLHttp');
    }else{
        //huh
        throw new Error("No ajax broser")
    }
    return ajax;
}


(function initializeGetAjax(){
    let myAjax =  null;
    if(window.XMLHttpRequest){
        myAjax = function(){
            return new XMLHttpRequest();
        };
    }else if(window.ActiveXObject){
        myAjax = function(){
            return new ActiveXObject("Microsoft.XMLHttp");
        };
    }else{
        myAjax =  function(){
            throw new Error("No Ajax support!");
        }
    }

    window.getAjax =  myAjax;
})();