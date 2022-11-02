const quizDB = [

{
    question : "Q1: What is the full form of HTML ? ",
    a : "h" ,
    b : "hh" ,
    c : "hhhhh" ,
    d : "hhhh"  ,
  ans : "ans4"
},

{
    question : "Q2: What is he full form of HTML ? ",
    a : "h" ,
    b : "hh" ,
    c : "hhh" ,
    d : "hhhh"  ,
  ans : "ans4"
},

{
    question : "Q3: What is he full form of HTML ? ",
    a : "h" ,
    b : "hh" ,
    c : "hhh" ,
    d : "hhhh"  ,
  ans : "ans4"
},

{
    question : "Q4: What is he full form of HTML ? ",
    a : "h" ,
    b : "hh" ,
    c : "hhh" ,
    d : "hhhh"  ,
  ans : "ans4"
}
]

const question = document.querySelector('.ques');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#sub');

const answers = document.querySelectorAll('.opt');

const showscore = document.querySelector('#showscore');

let questionCount = 0 ;
let score = 0 ;

const loadQuestion = () =>{
  const questionList = quizDB[questionCount] ;

  question.innerText =  questionList.question;
  option1.innerText = questionList.a ;
  option2.innerText = questionList.b ;
  option3.innerText = questionList.c ;
  option4.innerText = questionList.d ;

}

loadQuestion();

const getCheckAnswer = ()=>{
   let answer ;
   answers.forEach((currAnsElem) => {
     if(currAnsElem.checked){
       answer = currAnsElem.id ; 
     }
  
   });

   return answer ; 
} ;

const deselectAll = () => {
   answers.forEach((currAnsElem) => currAnsElem.checked = false ) ; 
}

submit.addEventListener('click' , () => {
   const checkanswer = getCheckAnswer();
    console.log(checkanswer);  
    if(checkanswer == quizDB[questionCount].ans ){
         score++ ; 
    };

    questionCount++ ; 
    
    deselectAll();

    if(questionCount < quizDB.length){
       loadQuestion();
    }else{
         showscore.innerHTML = `
           <h3> Your Score is ${score} / ${quizDB.length} </h3>
           <button class="btn" onClick="location.reload()"> Play Again </button>  
           `;
           showscore.classList.remove('showArea')  ;
    }
    
});

