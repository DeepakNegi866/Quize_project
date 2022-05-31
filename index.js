const quizDB=[
    {
        question: "Q1: 1 Megabyte (Mb) = ?",
        a: "1,024 kb",
        b: "1,000 kb",
        c: "1,200 kb",
        d: "1,275 kb",
        ans: "ans1"
    },
    {
        question: "Q2: Who is the Father of the Computer ?",
        a: "Charles Babbage",
        b: "Thomas Edison",
        c: "Albert Einstein",
        d: "Isaac Newton",
        ans: "ans1"
    },
    {
        question: "Q3: In the virtual world, WWW stands for ?",
        a: "World Without Windows",
        b: "World Wide Web",
        c: "World Wide Web Applications",
        d: "World Wide Warehouse",
        ans: "ans2"
    },
    {
        question: "Q4: What do you need to use to connect to the internet ?",
        a: "Mouse",
        b: "Modem",
        c: "CPU",
        d: "Keyboard",
        ans: "ans2"
    },
    {
        question: "Q5: What is the full form of E-Mail ?",
        a: "Electric Mail",
        b: "Exchange Mail",
        c: "Electronic Mail",
        d: "Engagement Mails",
        ans: "ans3"
    }
];

const question =document.querySelector('.question');
const option1=document.querySelector('#option1');
const option2=document.querySelector('#option2');
const option3=document.querySelector('#option3');
const option4=document.querySelector('#option4');
const submit=document.querySelector('#submit');

const answers=document.querySelectorAll('.answer');

const showScore=document.querySelector('#showScore');


let questionCount=0;
let score=0;
const loadQuestion=()=>
{
   const questionList=quizDB[questionCount];
   question.innerText=questionList.question;

   option1.innerText=questionList.a;
   option2.innerText=questionList.b;
   option3.innerText=questionList.c;
   option4.innerText=questionList.d;
}
loadQuestion();

const getCheckAnswer=()=>
{
    let answer;
    answers.forEach((currentElement) => {
        if(currentElement.checked)
        {
          answer=currentElement.id;
        }
       
    });
    return answer;
};

const deselectAll = () =>
{
    answers.forEach((currentElement)=> currentElement.checked=false)
}

submit.addEventListener('click', ()=>
{
    const checkedAnswer=getCheckAnswer();
    //console.log(checkedAnswer);
    if(checkedAnswer===quizDB[questionCount].ans)
    {
        score++;
    };
    questionCount++;

    deselectAll();

    if(questionCount < quizDB.length)
    {
        loadQuestion();
    }
    else{
     showScore.innerHTML=`
     <h3>You scored ${score}/${quizDB.length} </h3>
     <button class="btn" onclick="location.reload()">Play Again</button>
     `;

     showScore.classList.remove('scoreArea');
    }
});




