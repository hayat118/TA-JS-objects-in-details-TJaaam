// - Data:
//   - `title` (title of the question)
//   - `options` (array of options)
//   - `correctAnswerIndex` (index of the correct option)
// - Methods:
//   - `isAnswerCorrect` (will accept the index and returns `true` or `false` based on the answer is correct or not)
//   - `getCorrectAnswer` (will return the correct answer of the quiz when the function is called)


// without object

// let title='Where is the capital of Jordan';
// let options= ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'];
// let correctAnswerIndex=1;

// function isAnswerCorrect(index) {
//   return index === correctAnswerIndex;
// }

// function getCorrectAnswer() {
//   return options[correctAnswerIndex]
// }
// isAnswerCorrect();
// getCorrectAnswer();

// with Object

// let question ={
//   title:'Where is the capital of Jordan',
//   option: ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
//   correctAnswerIndex:1,

//    isAnswerCorrect(index) {
//   return index === question.correctAnswerIndex;
// },

//    getCorrectAnswer() {
//   return question.option[question.correctAnswerIndex]
// },
// };


// function 

function createQuestion(title,option,correctAnswerIndex){
  let question={};
  question.title=title;
  question.option=option;
  question.correctAnswerIndex=correctAnswerIndex;

  question.isAnswerCorrect=function (index){
        return index===question.correctAnswerIndex;
  }
  question.getCorrectAnswer=function(){
     return question.option[question.correctAnswerIndex]
  }
  return question;
}

const firstQuestion = createQuestion('Where is the capital of Jordan',['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],1)
  


