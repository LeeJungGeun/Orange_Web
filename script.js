var x=true;
function bar_() {
    if(x==false){
        document.getElementById("aside").style.display = "block";
        document.getElementById("sidebar").style.width = "100%";
        document.getElementById("sidebar").style.display = "block";
        x=true;
    }
    else if(x==true){
        document.getElementById("aside").style.display = "none";
        document.getElementById("sidebar").style.display = "none"; 
        x=false;
    }
}
