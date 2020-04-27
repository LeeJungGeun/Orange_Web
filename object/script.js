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
function web2_(){
    document.getElementById("main2").style.display="block";
    document.getElementById("main").style.display="none";
    document.getElementById("web2_").style.display="block";
    document.getElementById("web3_").style.display="none";
    document.getElementById("web4_").style.display="none";
    document.getElementById("web5_").style.display="none";
}
function web3_(){
    document.getElementById("main2").style.display="block";
    document.getElementById("main").style.display="none";
    document.getElementById("web2_").style.display="none";
    document.getElementById("web3_").style.display="block";
    document.getElementById("web4_").style.display="none";
    document.getElementById("web5_").style.display="none";
}
function web4_(){
    document.getElementById("main2").style.display="block";
    document.getElementById("main").style.display="none";
    document.getElementById("web2_").style.display="none";
    document.getElementById("web3_").style.display="none";
    document.getElementById("web4_").style.display="block";
    document.getElementById("web5_").style.display="none";
}
function web5_(){
    document.getElementById("main2").style.display="block";
    document.getElementById("main").style.display="none";
    document.getElementById("web2_").style.display="none";
    document.getElementById("web3_").style.display="none";
    document.getElementById("web4_").style.display="none";
    document.getElementById("web5_").style.display="block";
}