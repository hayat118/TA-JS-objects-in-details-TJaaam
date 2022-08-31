class Person {
  constructor(name,age,gender){
    this.name=name;
    this.age=age;
    this.gender=gender;
  }

  eat(){
    return eat;
  }
  sleep(){
    return sleep;
  }
  walk(){
   return walk;
  }
}

let pankaj= new Person("pankaj",25,"male");

// 1st stage
class Player extends Person {
  constructor(sportsName){
    super(this.name,age,gender);
    this.sportsName=sportsName;

  }

  play(){
     return play;
  }
}

class Teacher extends Person{
  constructor(instituteName){
    super(this.name,age,gender);
    this.instituteName=instituteName;
  }

  teach(){
    return teach;
  }
}

class Artist extends Person{
  constructor(){
    super(this.name,age,gender);
    isKind=true;
  }

  createArt(){
    return createart;
  }
}

// 2nd stage

class Cricketer extends Player {
  constructor(teamName){
    super(sportsName);
    this.teamName=teamName;
  }

  playCricket(){
     return playcricket;
  }
}

