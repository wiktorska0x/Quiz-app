const quizData = [
    {
        question: 'Which one is JavaScript Framework?',
        a: '.NET',
        b: 'Hibernate',
        c: 'Angular',
        d: 'Dropwizard',
        correct: 'c'
    },
    {
        question: 'What is the most used programming language in 2019?',
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'JavaScript',
        correct: 'd'
    },
    {
        question: 'Hex / RGB green color codes :',
        a: '#000000',
        b: '#008000',
        c: '#FF00FF',
        d: '#0000FF',
        correct: 'b'
    },
    {
        question: 'What does HTML stand for?',
        a: 'HyperText Markup Language',
        b: 'Cascading Style Sheet',
        c: 'Jason Object Notation',
        d: 'New Oxford Dictionary',
        correct: 'a'
    },
    {
        question: 'What year was JavaScript launched?',
        a: '1996',
        b: '1995',
        c: '1994',
        d: 'none of the above',
        correct: 'd'
    }
    
];

const answerEls = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");
const questionEl = document.getElementById('question');

const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz()
{
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];
    questionEl.innerHTML = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

    
}

function getSelected()
{
    

    let answer = undefined;

    answerEls.forEach((answerEl) =>
    {
        if(answerEl.checked)
        {
            answer =  answerEl.id;
        }
    });
    
    return answer;
}

function deselectAnswers()
{
    answerEls.forEach((answerEl) =>
    {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', () => 
{
    
    const answer = getSelected();

    if(answer)
    {
        if(answer === quizData[currentQuiz].correct)
        {
            score++;
        } 
        currentQuiz++;
        if(currentQuiz < quizData.length)
        {
            loadQuiz();
        }
        else
        {
            quiz.innerHTML =
                `<h1>You answered correctly at ${score}/${quizData.length} questions.</h1> 
                <button onclick="location.reload()">Reload</button>`;
            
        }
    }
}
);