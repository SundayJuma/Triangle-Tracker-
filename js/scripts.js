
function myFunction() {
var side A = document.getElementById('side a').value;
var side B = document.getElementById('sideb').value;
var Base = document.getElementById('base').value;
var result;
if (Base === side A && side A === side B && side B === Base) {
    result = "Equilateral Triangle";
} else if (side A === side B && side B !== Base && Base !== side A){
	result = "Isosceles Triangle";
} else if (side A !== side B && side B !== Base && Base !==side A)(side A + side B < Base && Base + side A < side B && side B + Base < side A) {
	result = "Scalene Triangle";
} else if ( side A + side B <= Base && side B + Base <= side A) { (side A + Base <= side B) {
	result = "Not a Triangle";
}else {
  result ="Not a Triangle";
}
alert(result);
