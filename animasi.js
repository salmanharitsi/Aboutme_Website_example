var sidemenu1 = document.getElementById("sidemenu");
var open = document.getElementById("open");
var close = document.getElementById("close");
var counter=1;
        
setInterval(function(){
     document.getElementById('radio' + counter).checked=true;
    counter++;
    if(counter >3){
        counter=1;
    }
},5000);
      
function menu () {
    open.addEventListener("click", function (){
        sidemenu1.style.right="0";
    });
    close.addEventListener("click", function (){
        sidemenu1.style.right="-185px";
    } );
}
menu()