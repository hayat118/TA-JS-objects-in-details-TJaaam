
class Square{
  constructor (width,heigth){
    this.width=width;
    this.heigth=heigth;
  }
  description(){
    alert(`The square is ${width} x ${height}`)
  }
  calcArea(){
    this.area=width*heigth;
    return this.area;
    
  }
  area(){
    return this.area;
  }
}

let s1 = new Square(6,6);
