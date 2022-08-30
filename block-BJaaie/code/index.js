function CreateAnimal(location,numberOfLegs){
   this.location=location;
   this.numberOfLegs=numberOfLegs;
}

CreateAnimal.prototype={
  eat:function(){
    console.log(`I live in ${this.location} and I can eat`)
  },
  changeLocation:function(newLocation){
   this.location=newLocation;
    return this.location;
  },
  summary:function(){
    return `I live in ${this.location} and I have ${this.numberOfLegs}`
  }
}

let animal1 = new CreateAnimal("india",4);

// dogs

function CreateDog(location,numberOfLegs,name,color){
  CreateAnimal.call(this,location,numberOfLegs);
  this.name=name;
  this.color=color;
}

CreateDog.prototype={
  bark:function(){
    alert (`I am ${this.name} and I can bark 🐶`)
  },
  changeName:function(newName){
    this.name=newName;
    return this.name;
  },
  changeColor:function(newColor){
    this.color=newColor;
    return this.color;
  },
  summary:function(){
    return `I am ${this.name} and I am of ${this.color} color. I can also bark`
  }
}

Object.create(CreateDog.prototype,CreateAnimal.prototype);

let pochi=new CreateDog("india",4,"pochi","brown");

// cat

function CreateCat(location,numberOfLegs,name,colorOfEyes){
  CreateAnimal.call(this,location,numberOfLegs);
  this.name=name;
  this.colorOfEyes=colorOfEyes;
}


CreateCat.prototype={
  meow:function(){
   alert (`I am ${this.name} and I can do mewo meow 😹`)
  },
  changeName:function(newName){
    this.name=newName;
    return this.name;
  },
  changeColorOfEyes:function(newColor){
      this.changeColorOfEyes=newColor;
      return this.changeColorOfEyes;
  },
  summary:function(){
    return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow.`
  },
}
Object.create(CreateCat.prototype,CreateAnimal.prototype);


let cat1=new CreateCat("india",4,"mishi","brown")



// class pattern

class Animal{
  constructor(location,numberOfLegs){
   this.location=location;
   this.numberOfLegs=numberOfLegs;
}
 eat(){
    console.log(`I live in ${this.location} and I can eat`)
  }
  changeLocation(newLocation){
   this.location=newLocation;
    return this.location;
  }
  summary(){
    return `I live in ${this.location} and I have ${this.numberOfLegs}`
  }
}


let animal1 = new Animal("india",4);


// class pattern(dog)
class Dog extends Animal{
  constructor(location,numberOfLegs,name,color){
  super(location,numberOfLegs);
  this.name=name;
  this.color=color;
}

 bark(){
    alert (`I am ${this.name} and I can bark 🐶`)
  }
  changeName(newName){
    this.name=newName;
    return this.name;
  }
  changeColor(newColor){
    this.color=newColor;
    return this.color;
  }
  summary(){
    return `I am ${this.name} and I am of ${this.color} color. I can also bark`
  }
}
let pochi1=new Dog("india",4,"pochi","brown");
