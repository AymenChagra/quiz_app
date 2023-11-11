//the quiz part

//questionsList is an array of objects 
//each object has the property question and answer
//the answer property is itself an arry of objects
//inside, each object has the property text and check

//restoring the selected quiz data and converting it back to js
let questions = JSON.parse(localStorage.getItem('quizData'));
//console.log(questions); //optional (for testing)

const questionsList = questions; //the questions datatype is array

const questionElement= document.querySelector("#questions");
const answerBtns=document.querySelector(".answerBtns");
const nextBtn=document.querySelector(".nextBtn");

let currentQuestionIndex=0;
let score=0;


//this function initiate the quiz from the beginning  
function startQuiz(){
  currentQuestionIndex=0;   //every time we start the quizz the Indx and score need to be reset to zero
  score=0;
  nextBtn.innerHTML="Next" // when restarting the quiz we should replace "Restart" by "Next"
  showQuestion();
}


//This function shows the current question and the associated suggestions
function showQuestion(){
  resetState();
  let currentQuestion=questionsList[currentQuestionIndex];
  let questionNumber=currentQuestionIndex+1;
  questionElement.innerHTML=questionNumber+"."+currentQuestion.question;

  currentQuestion.answer.forEach(element=>{          //iterating over the answers of the question list
    const button=document.createElement("button");   //creating a new button
    button.innerHTML=element.text;                   // adding the answers inside the new buttons
    button.classList.add("btn");                     //adding the css class "btn" to the new btn
    answerBtns.appendChild(button);                  //adding the new btn to the div that contains the answers
    button.dataset.check=element.check;              //storing the check value (boolean value) in the button
    button.addEventListener("click",selectedAnswer);
  })
}


//This function reset the quiz to prepare for the next question
function resetState(){
  nextBtn.style.display="none";                         //removing the next button
  while(answerBtns.firstChild){                         //as long as there is a button
    answerBtns.removeChild(answerBtns.firstChild);      //removing the button as long long as the condition is true
  }
}


//This function detects the user's answer and indicates the right response
function selectedAnswer(e){
  const selectedBtn= e.target;                           //detecting the selected button
  const checkAnswer= selectedBtn.dataset.check==="true"; //getting the boolean value of the selected btn
  if (checkAnswer){                                      
    selectedBtn.classList.add("correctAnswer");          //if true changing the css of the correct answer 
    score++;
  }else{
    selectedBtn.classList.add("falseAnswer");            //else changing the css of the false answer 
  }
  Array.from(answerBtns.children).forEach(button=>{      //iterating over the provided answers
    if(button.dataset.check==="true"){
      button.classList.add("correctAnswer");             //changing the css of the correct answer button
    }
    button.disabled=true;                                //disabling the other buttons 
  })
  nextBtn.style.display="block";                         //displaying the the next button
}


//This event is generated when clicking on the next/restart button
nextBtn.addEventListener("click",()=>{
  if(currentQuestionIndex<questionsList.length){
    handleNextBtn()                                      // this function allows to pass from current qs to the next
  }else{
    startQuiz();                                         //when indx<quesListIndx and we click on restart 
  }
}
)


//This function is responsible for handling the next button two scenarios
//the first when passing from question to question
//The second when the quiz is finished and it has to display the result
function handleNextBtn(){
  currentQuestionIndex++;                                //adding 1 to questionList indx
  if (currentQuestionIndex<questionsList.length){
    showQuestion()                                       //displaying the questions
  } else {
    showScore();                                         //When we finish all the questions this will show the score
  }
}


//This function is responsible for showing the result 
//after the quiz is finished
function showScore() {
  resetState();
  questionElement.innerHTML=`you scored ${score} out of ${questionsList.length}!`;
  nextBtn.innerHTML="Restart";
  nextBtn.style.display="block"; 
}


startQuiz();

for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    console.log(`Key: ${key}, Value: ${value}`);
}
