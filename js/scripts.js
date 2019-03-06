// Back-end logic
//Equilateral: All sides are equal.
//Isosceles: Exactly 2 sides are equal.
//Scalene: No sides are equal.
//NOT a triangle: The sum of the lengths of any two sides of a triangle is less than or equal to the length of the third side.

var triangleType = function(side1, side2, side3) {
  if (((side1 + side2) > side3)^((side2 + side3) > side1)^((side1 + side3) > side2)) {
    if ((side1 == side2) && (side2 == side3)) {
        return "Equilateral"
    }
    else if (((side1 == side2) && (side2 != side3)) || ((side2 == side3) && (side1 != side2)) || ((side1 == side3) && (side2 != side3))) {
        return "Isosceles"
    }

    else if ((side1 != side2) && (side2 != side3) && (side1 != side3)) {
        return "Scalene"
    }

  }
  else {
    return "Not a triangle. The sum of the lengths of any two sides must be greater than the third side."
  }

};






// User interface beyond this point

$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    var side1 = parseInt($("#side1").val());
    var side2 = parseInt($("#side2").val());
    var side3 = parseInt($("#side3").val());

    var triangle = triangleType (side1, side2, side3)

    $("#output").text(triangle)


  });


});
