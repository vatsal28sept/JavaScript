function myfnc(){
    document.querySelector(".demo").style.color = "red";
}
function demo(){
    document.querySelector(".que").style.backgroundColor = "red";
}
function con(){
    document.querySelector(".con").innerText = "This Is P Tag";
}
function inp(){
    var x = document.querySelector(".inp").value;
    document.querySelector(".ans").innerHTML = x;
}
function DoSum(){
    var x = document.querySelector(".no1").value;
    var y = document.querySelector(".no2").value;
    var z = parseInt(x)+parseInt(y);
    document.querySelector(".sumans").innerHTML = z;
}