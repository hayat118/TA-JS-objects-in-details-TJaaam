class Question{

  constructor(title,options,correctAnswerIndex){
    this.title = title;
    this.options = options;
    this.correctAnswerIndex =  correctAnswerIndex;
  }

  isAnswerCorrect(index){
   return index===this.correctAnswerIndex;
  }
  getCorrectAnswer(){
      return this.options[this.correctAnswerIndex];
  }

}