const questions =[
{

    question: " What is the Arabic term for the worship of God (Allah)?" ,
    answers:[
        { text:"Solah" , correct: false},
        { text:"Ibaadah" , correct: true} ,
        { text:"Iman" , correct: false} ,
        { text:"Islam" , correct: false} ,
    ]
},
{

    question: "What is the Arabic word for the day of resurrection? " ,
    answers:[
        { text:"jummah" , correct: false},
        { text:"Eid" , correct:false} ,
        { text:"dunya" , correct: false} ,
        { text:"qiyamah" , correct: true} ,
    ]

}, 
{

    question: " Who was the first prophet in Islam?" ,
    answers:[
        { text:"Adam" , correct: true},
        { text:"Muhammad(SAW)" , correct: false} ,
        { text:"Yunus" , correct: false} ,
        { text:"Musa" , correct: false} ,
    ]
} ,
{
    
    question: " Which was the first surah to be revealed? " ,
    answers:[
        { text:" Suratul al-Fatiha" , correct: false},
        { text:"Suratul al-Imran" , correct: false} ,
        { text:"Suratul al-Muddaththir " , correct: false} ,
        { text:"Suratul al-Alaq" , correct: true },
    ]
}, 
{
    
    question: "Which is the smallest surah in Quran? " ,
    answers:[
        { text:" Suratul Al-Asr" , correct: false},
        { text:"Suratul al- Al-Falaq " , correct: false} ,
        { text:"Suratul al-Kawthar " , correct: true} ,
        { text:"Suratul al- Quraysh" , correct: false },
    ]
},
{
    
    question: "How many surahs are in the Quran? " ,
    answers:[
        { text:"114" , correct: true},
        { text:"210" , correct: false} ,
        { text:"112" , correct: false} ,
        { text:"105" , correct: false} ,
    ]
},
{
    
    question: "What does Allahs name Al-Muizz mean? " ,
    answers:[
        { text:"The One who dishonours" , correct: false},
        { text:"The One who will judge" , correct: false} ,
        { text:"The One who sees all" , correct: false} ,
        { text:"The One who honours" , correct: true} ,
    ]
},
{
    
    question: "Which surah does not begin with the basmallah? " ,
    answers:[
        { text:"Surah Rahman" , correct: false},
        { text:"Surah Yasin" , correct: false} ,
        { text:"Surah Tawbah " , correct: true} ,
        { text:"Surah Fathia" , correct: false} ,
    ]
},
{
    
    question: "Which Angel will blow the horn to signal the Day of Judgement? " ,
    answers:[
        { text:"Jibraeel (as)" , correct: false},
        { text:"israfeel (as)" , correct: true} ,
        { text:"Malik Ul Moat (as)" , correct: false} ,
        { text:"Mikail" , correct: false} ,
    ]
},
{
    
    question: "How many gates of Jannah are there? " ,
    answers:[
        { text:"5" , correct: false},
        { text:"7" , correct: false} ,
        { text:"6" , correct: false} ,
        { text:"8" , correct: true} ,
    ]
}


];


const questionElement =document.getElementById("question");
const answerButtons =document.getElementById("answer-buttons");
const nextButton =document.getElementById("next-btn");


let currentQuestionIndex = 0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
   resetState();


    let currentQuestion = questions[currentQuestionIndex];
    let questionNo= currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + " ." + currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{

const button = document.createElement("button");
button.innerHTML = answer.text;
button.classList.add("btn");
answerButtons.appendChild(button);
if(answer.correct){
    button.dataset.correct = answer.correct;
}
button.addEventListener("click" , selectAnswer);

    });
}


function resetState(){
    nextButton.style.display ="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}


function selectAnswer(e){

    const selectedBtn = e.target;
    const  isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
      });

    nextButton.style.display="block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

   
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}





nextButton.addEventListener("click" , () => {
if(currentQuestionIndex < questions.length){
    handleNextButton();
}else{
    startQuiz();
}


});





startQuiz();