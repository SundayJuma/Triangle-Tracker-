
  function event() {

  var sideA = parseInt(document.getElementById('sideA').val());
  var sideB = parseInt(document.getElementById('sideB').val());
  var Base = parseInt(document.getElementById('Base').val());
  var result;

    if (Base === sideA && sideA === sideB && sideB === Base) {
        result = "Equilateral Triangle";
        alert(result);
    } else if (sideA === sideB && sideB !== Base && Base !== sideA){
    	result = "Isosceles Triangle";
      alert(result);
    } else if ((sideA !== sideB && sideB !== Base && Base !==sideA) && (sideA + sideB < Base && Base + sideA < sideB && sideB + Base < sideA)) {
    	result = "Scalene Triangle";
      alert(result);
    } else if (sideA + sideB <= Base && sideB + Base <= sideA && sideA + Base <= sideB) {
    	result = "Not a Triangle";
      alert(result);
    }else {
      result ="Not a Triangle";
      alert(result);
    }

  }



  var a = prompt("input a");
  var b = prompt("input b");
  var c = prompt("input c");

  if(isNaN (a)){
  alert("invalid input");
  }
  else if(isNaN (b)){
  alert("invalid input");
  }
  else if(isNaN (c)){
  alert("invalid input");
  }

  else if (a === b && b === c){
  alert("Equilateral Triangle");
  }
  else if (a === b && b !== c || c !== a){
alert("Isosceles Triangle");
}
else if (a !== b && b !== c && c !== a){
alert("Scalene Triangle");
}
 
