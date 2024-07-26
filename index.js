const quizData = [
    {
        question: 'what is the capital of France?',
        option: ['Berlin','Madrid','Paris','Kwara'],
        correctAnswer: 'Paris'
    },
    {
        question: 'which planet is known as the red planent?',
        option: ['Earth','Mars','Pluto','Jupiter'],
        correctAnswer: 'Mars'
    },
    {
        question: 'what is the largest Mammal?',
        option: ['Elephant','Blue Whale','Giraffe','Hippopotamus'],
        correctAnswer: 'Blue whale'
    },
];


const quizContainer = document.querySelector('#quizContainer');
const resultContainer = document.querySelector('#result');
const count = document.querySelector('.count');


let currentQuestion = 0;
let score = 0;

count.innerHTML;

function displayQuestion(){
    const currentQuizData = quizData[currentQuestion];
    quizContainer.innerHTML =`<h3>${currentQuizData.question}</h3>

    <ul>
        ${
            currentQuizData.option.map((options,index) =>
           ` <li onclick = "checkAnswer(${index})">
            ${options}
            </li>`
            ).join('')
        }
    </ul>`
}

function checkAnswer(selectIndex){
    const currentQuizData = quizData[currentQuestion];
    if(currentQuizData.option[selectIndex] === currentQuizData.correctAnswer){
        score++;
    };

    currentQuestion++; // increase by 2
    count.innerHTML = currentQuestion;

    if(currentQuestion < quizData.length){
        displayQuestion();
    }else{
        showResult();
    }
   
}

//function to show quiz result
function showResult(){
    resultContainer.innerHTML = `your score: ${score}
    out of ${quizData.length}`
}
function submitQuiz(){
    alert("please click on any option to answer the question,");
}
resultContainer.style.color = "black";
resultContainer.style.fontWeight = 'bolder';
resultContainer.style.fontSize = "800"


displayQuestion();

