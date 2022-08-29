class animal{
   constructor(location,numberOfLegs){
     this.location=location;
     this.numberOfLegs=numberOfLegs;
   }
   eat(){
     console.log(`I live in ${location} and I can eat`)
   }
   changeLocation(){
     this.location=location;
   }
   summary(){
     return `I live in ${location} and I have ${numberOfLegs}`
   }
}
