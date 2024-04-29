function myId(){
    document.getElementById("demo").style.color = "red";
}
function myDemo(){
    document.getElementById("mydemo").innerText = "I Am Patel Vatsal";
    document.getElementById("mydemo").style.backgroundColor = "red";
    document.getElementById("mydemo").style.color = "black";
}
function con(){
    document.getElementById("content").innerText = "Vatsal Here!!";
    document.getElementById("content").style.backgroundColor = "red";
    document.getElementById("content").style.color = "white";
}
function val(){
    var x = document.getElementById("txt1").value;
    document.getElementById("ans").innerText = x; 
}
function DoSum(){
    var x = document.getElementById("txt2").value;
    var y = document.getElementById("txt3").value;
    var z = parseInt(x)+parseInt(y);
    document.getElementById("sum").innerText =z;
}