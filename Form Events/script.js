function OnFo(){
    myfrm.txt.style.backgroundColor = "red";
    myfrm.txt.style.width = "530px";
}
function Sub(){
    alert("Data Submitted To The Server");
}
function blu(){
    myfrm1.txt1.value = myfrm1.txt1.value.toUpperCase(); 
    myfrm1.txt1.style.backgroundColor = "blue";
    myfrm1.txt1.style.color = "yellow";
}
function cha(){
    var a =  myfrm2.txt2.value;
    document.getElementById('result').innerHTML += "Your Text Is : " + a + "<br>";
}
function myFunction() 
{
var x = frm2.mySelect.value;
document.write( "You selected: " + x);
}
