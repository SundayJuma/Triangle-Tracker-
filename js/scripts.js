
function myFunction() {
var side a = document.getElementById('side a').value;
var side b = document.getElementById('sideb').value;
var base = document.getElementById('base').value;
var result;
if (base === side a && side a === side b && side b === base) {
    result = "Equilateral Triangle";
} else if (side a === side b && side b !== base && base !== side a){
	result = "Isosceles Triangle"
} else if (side a !== side b && side b !== base && base !==side a)(side a + side b < base && base + side a < side b && side b + base < side a) {
	result = "Scalene Triangle"
} else if ( side a + side b <= base && side b + base <= side a) { (side a + base <= side b) {
	result = "Not a Triangle"
}else {
  result ="Not a Triangle"
}
alert(result);
