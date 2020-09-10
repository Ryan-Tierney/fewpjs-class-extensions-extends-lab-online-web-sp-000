// Your code here
class Polygon {
  constructor(sides){
  this.sides = sides
  } 
  
  get countSides() { 
    return this.sides.length
  }
  
  get perimeter() {
    if ( !Array.isArray( this.sides ) ) return;
    let sum = 0;
    for ( var int of this.sides ) {
      sum += int
    }
    return sum
  }
}

class Triangle extends Polygon {
  
  get isValid() { 
    if 
  }
  
}

class Square extends Polygon {
  
  get isValid() { 
  } 
  
  get area() { 
  } 

}