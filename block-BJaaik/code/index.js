class Person {
  constructor(name,age,gender){
    this.name=name;
    this.age=age;
    this.gender=gender;
  }

  eat(){
    console.log(`${this.name} can eat`)
  }
  sleep(){
    console.log(`${this.name} can sleep`)
  }
  walk(){
    console.log(`${this.name} can walk`)
  }
}

// let pankaj= new Person("pankaj",25,"male");

// 1st stage
class Player extends Person {
  constructor(name,age,gender,sportsName){
    super(name,age,gender);
    this.sportsName=sportsName;

  }

  play(){
     console.log(`${this.name} can play`)
  }
}

class Teacher extends Person{
  constructor(name,age,gender,instituteName){
    super(name,age,gender);
    this.instituteName=instituteName;
  }

  teach(){
     console.log(`${this.name} can teach`)
    
  }
}

class Artist extends Person{
  constructor(name,age,gender,kind){
    super(name,age,gender);
    this.Kind=kind;
  }

  createArt(){
     console.log(`${this.name} can create art`)
    
  }
}

// 2nd stage

class Cricketer extends Player {
  constructor(name,age,gender,sportsName,teamName){
    super(name,age,gender,sportsName);
    this.teamName=teamName;
  }

  playCricket(){
     console.log(`${this.name} can play cricket`)
    
  }
}

let pankaj= new Cricketer("pankaj",25,"male","cricket","india");

