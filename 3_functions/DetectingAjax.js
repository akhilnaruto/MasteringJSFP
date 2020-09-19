function getAjax(){
    let ajax = null;
    if(window.XMLHttpRequest){
        // for modern browsers
        ajax =  new XMLHttpRequest()
    }else if(window.ActiveXObject){
        // bad IE5 and IE6
        ajax =  new ActiveXObject();
    }else{
        //huh
        throw new Error("No ajax broser")
    }
    return ajax;
}