function triangleTracker(){

var a = parseInt(document.getElementById("A").value);
var b = parseInt(document.getElementById("B").value);
var c = parseInt(document.getElementById("C").value);

var triangle =[];

triangle.push("a");
triangle.push("b");
triangle.push("c");

if(isNaN (a)||isNaN (b) || isNaN (c)){
alert("invalid input");
}

else if (a+b<=c || b+c<=a || c+a<=b) {
alert("Not a Triangle");
}

else if(a==b && b==c && c==a){
alert("Equilateral triangle");
}
else if (a==b || b==c || c==a){
alert("Isosceles Triangle");
}
else if (a!==b && b!==c && c!==a){
alert("Scalene Triangle");
}
}
