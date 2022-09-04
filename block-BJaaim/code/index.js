let form=document.querySelector("form");
let next=document.querySelector(".next");
let prev=document.querySelector(".prev");
let quizElm=document.querySelector(".quiz");
let showResult=document.querySelector(".show-result");
let totalQuestions=document.querySelector("header p");



class Question{
  constructor(title,option,correctAnswerIndex){
    this.title=title;
    this.option=option;
    this.correctAnswerIndex=correctAnswerIndex;
  }

  isCorect(correctAnswerIndex,answerIndex){
    // console.log(this.correctAnswerIndex, this.option, correctAnswerIndex, answerIndex)
    return this.option[this.correctAnswerIndex] === correctAnswerIndex;

  }
  getCorrectAnswer(){
    return this.option[correctAnswerIndex];
  }
}



class Quiz{
  constructor(questions=[],score=0){
    this.questions=questions;
    this.score=score;
    this.activeIndex=0;

  }
  incrementScore(){
    this.score=this.score +1;
  }

  addQuestion(title,option,answerIndex){
    let question= new Question(title,option,answerIndex);
    this.questions.push(question);
    // this.createUI();
  }
  nextQuestion(){
    // this.questions=this.questions+1;
    this.activeIndex = this.activeIndex + 1;
    this.createUI();
  }
  prevQuestion(){
    this.activeIndex = this.activeIndex - 1;
    this.createUI();
    
  }

  handleButton(){
    if(this.activeIndex===0){
      prev.style.visibility ="hidden";
      showResult.style.visibility="hidden"

    }else if(
      this.activeIndex===this.questions.length-1
      ){
      next.style.visibility ="hidden";
      showResult.style.visibility="visible"

    }else{
       next.style.visibility ="visible";
      prev.style.visibility ="visible"; 
      showResult.style.visibility="visible"

    }
      

  }


 
  createUI(){
    quizElm.innerHTML="";
    let activeQuestion=this.questions[this.activeIndex];
    let form=document.createElement("form");
    let fieldset=document.createElement("fieldset");
    let legend=document.createElement("legend");
        legend.innerText=activeQuestion.title;
    let optionsElm=document.createElement("div");
        optionsElm.classList.add("options");
    let buttonWrapper=document.createElement("div");
    let button=document.createElement("button");
        button.type="submit";
        button.innerText="submit";
        buttonWrapper.append(button);
  //  console.log(activeQuestion);
    activeQuestion.option.forEach((option,index) =>{
      let input =document.createElement("input");
      let div = document.createElement('div');
      input.id=`option-${index}`;
      input.type=`radio`;
      input.name=`options`;
      input.value=option;
      let label =document.createElement("label");
      label.for=`option-${index}`
      label.innerText=option;
   
      form.addEventListener("submit",(event)=>{
        event.preventDefault();
        if(input.checked){
        // console.log(input.value)
        // alert(activeQuestion.isCorect(input.value));
        if (activeQuestion.isCorect(input.value)){
           this.incrementScore();
        }
        }
      })

      div.append(input,label)
      optionsElm.append(div);
    }); 
    this.handleButton();
    totalQuestions.innerText=`Total questions:${this.questions.length}`
    fieldset.append(legend,optionsElm,buttonWrapper) ;
    form.append(fieldset) ;
    // return form; 
    quizElm.append(form);
  }
 
}
let quiz=new Quiz();

 quizCollection.forEach((question)=>{
  quiz.addQuestion(
    question.title,
    question.option,
    question.answerIndex,
  );
});

quiz.createUI();

next.addEventListener("click",quiz.nextQuestion.bind(quiz));
prev.addEventListener("click",quiz.prevQuestion.bind(quiz));
showResult.addEventListener("click",()=>{
  alert(`Your score is ${quiz.score}`)
})

