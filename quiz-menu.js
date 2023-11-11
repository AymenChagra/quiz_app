//the template that will be filled with quiz boxes
const infoBoxTemplate= document.querySelector(".info-box-template");
const searchButton=document.querySelector(".search-button")
//main container
const container= document.querySelector(".container");

const searchInput= document.querySelector("#search");


//the following array will store the quiz data
let quizData = []; 

quizzes = quizzes.map(quiz => {
  const infoBox = infoBoxTemplate.content.cloneNode(true).children[0];
  const boxTitle = infoBox.querySelector(".box-title");
  const boxbody = infoBox.querySelector(".box-body");
  boxTitle.textContent = quiz.name;
  boxbody.textContent = quiz.numberOfQuestions;

  //storing the data of the selected quiz when clicking 
  infoBox.addEventListener("click", () => {
    quizData=quiz.questionsList;
    localStorage.setItem('quizData', JSON.stringify(quizData)); //converting the data to json and storing it 
    //console.log(data); // Optional: Display the updated data in the console
  });

  container.append(infoBox);
  return { name: quiz.name, numberOfQuestions: quiz.numberOfQuestions, element: infoBox };
});



//to search by clicking on the search button or enter key
function findElements(){
  const value=searchInput.value.toLowerCase();                                                             //gets the value from the input filed 
  quizzes.forEach(quiz=>{                                                                                 // creating a loop pver the users array
    const isVisible=quiz.name.toLowerCase().includes(value)                                               //gets true if the data includes characters from the input filed and false if not 
    quiz.element.classList.toggle("hide",!isVisible);                                                    // hiding the infoBox if the if we get false
  }) 
}
searchButton.addEventListener("click",findElements)

searchInput.addEventListener("keydown", event => {
  if (event.key === "Enter") {
    findElements();
  }
});