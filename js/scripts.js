var a = parseInt (prompt("input a"));
var b = parseInt (prompt("input b"));
var c = parseInt (prompt("input c"));


if(isNaN (a)||isNaN (b) || isNaN (c)){
alert("invalid input");
}

else if (a+b<=c || b+c<=a || c+a<=b) {
alert("Not a Triangle");
}

if(a==b && b==c && c==a){
alert("Equilateral triangle");
}
else if (a==b || b==c || c==a){
alert("Isosceles Triangle");
}
else if (a!==b && b!==c && c!==a){
alert("Scalene Triangle");
}
