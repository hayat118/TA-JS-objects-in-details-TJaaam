
class Square{
  constructor (side){
    this.width=side;
    this.heigth=side;
    this.noOfTimes=0;
  }
  description(){
    alert(`The square is ${this.width} x ${this.height}`)
  }
  calcArea(){
   return this.width * this.heigth;
    
  }
   get area(){
     this.noOfTimes++
  if(this.noOfTimes>=4){
    alert(`Upper limit reached`)
  }else{
   return this.width * this.heigth;
      
  }
    
  }
  set area(value){
    let side=Math.sqrt(value);
    this.width=side;
    this.heigth=side;
  }
  static isEqual(a,b){
    return (a.width*a.height)===(b.width*b.heigth);
  }
}

let s1 = new Square(200);
let s2=  new Square(100);



class User{
  constructor(firstName,lastName){
    this.firstName=firstName;
    this.lastName=lastName;

  }

  get fullName(){
     return (`${this.firstName} ${this.lastName}`)
  }
  set fullName(name){
    if(name.length<5){
      alert (`Full name should be more than 5 characters`)
     }else{
       let firstName=name.split(` `)[0];
       let lastName=name.split(` `)[1];
       this.firstName=firstName;
       this.lastName=lastName;
     }
   }

   nameContains(str){
      return `${this.firstName} ${this.lastName}`.includes(str);
   }
}

let user1= new User("arya","stark");
