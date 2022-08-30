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

function CreateDog(name,color){
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

let pochi=new CreateDog("pochi","brown");
