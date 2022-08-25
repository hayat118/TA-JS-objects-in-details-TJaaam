function createUser(name,id,noOfProject){
  let user={};
  user.name=name;
  user.id=id;
  user.noOfProject=noOfProject;


  user.getProjects=function(){
    return user.noOfProject;
  }
  user.changeName=function(newName){
    let preName=user.name;
    user.name=newName;
    return preName;
  }
  user.incrementProject=function(){
    user.noOfProject +=1;
    return user.noOfProject;
  }
  user.decrementProject=function(){
    user.noOfProject -=1;
    return user.noOfProject;
  }
  return user;
}


// class pattern

class CreateUser{
  constructor(name,id,noOfProject){
    this.name=name;
    this.id=id;
    this.noOfProject=noOfProject;
  }

    getProjects(){
    return this.noOfProject;
  }
     changeName(newName){
    let preName=this.name;
    this.name=newName;
    return preName;
  }
      incrementProject(){
    this.noOfProject +=1;
    return this.noOfProject;
  }
      decrementProject(){
    this.noOfProject -=1;
    return this.noOfProject;
  }
  
}

let user1= new CreateUser("Pankaj",12,10);
let user2=createUser("Rekha",11,20);

console.group("Pankaj");
console.log(user1.name);
console.log(user1.id);
console.log(user1.incrementProject());
console.log(user1.decrementProject());
console.log(user1.changeName("Mona"));
console.log(user1.name);
console.groupEnd();



