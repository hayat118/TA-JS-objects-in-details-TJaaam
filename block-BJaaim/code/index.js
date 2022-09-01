let questionListRoot=document.querySelector(".question-list");



class Question{
  constructor(title,option,answer){
    this.title=title;
    this.option=option;
    this.answer=answer;
    this.isCorect=false;
  }

  isCorect(answer){
    this.answer=this.answer;
    return this.answer;
  }
}



class Quiz{
  constructor(questions=[]){
    this.questions=questions;

  }

  addQuestion(title,option,answer){
    let question= new Question(title,option,answer);
    this.questions.push(question);
    // this.createUI();
  }
  nextQuestion(){
    this.questions=this.questions+1;
    return this.questions;
  }

  createUI(){
    let li=document.createElement("li");
    let h1=document.createElement("h1")
       h1.innerText=questions.title
    let h2=document.createElement("h2")
       h2.innerText=this.questions.option;
    let h3=document.createElement("h3")
    let h4=document.createElement("h4")
    let h5=document.createElement("h5");
    let button=document.createElement("button");
    li.append(h1,h2,h3,h4,h5,button)
    questionListRoot.append(li)

  }
}