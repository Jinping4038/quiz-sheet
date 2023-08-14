const quizArray = [
  {
    question: "What is the capital of France?",
    answers: ["London", "Berlin", "Paris", "Madrid"],
    correctAnswerIndex: 2,
  },
  {
    question: "What is the fruit?",
    answers: ["Apple", "cat", "desk", "pen"],
    correctAnswerIndex: 0,
  },
  {
    question: "What is the smallest prime number?",
    answers: ["1", "2", "3", "5"],
    correctAnswerIndex: 2,
  },
];
let count = 0
function showQuiz(qArray, i) {
  const quizsheet = document.createElement("div");
  quizsheet.className = "quizsheet";

  const quizs = document.createElement("div");
  quizs.className = "quizs";
  console.log(i, qArray)

  quizs.textContent = qArray[i].question;
  quizsheet.appendChild(quizs);

  const answers = document.createElement("ul");
  answers.className = "answers";

  for (const answerValue of qArray[i].answers) {
    const answerWrapper = document.createElement("div");
    answerWrapper.className = "answerWrapper";

    const radiobox = document.createElement("input");
    radiobox.type = "radio";
    radiobox.name = "radioName";
    radiobox.value = answerValue;
    radiobox.className = "radiobox";


    const answer = document.createElement("li");
    answer.className = "answer";
    answer.textContent = answerValue;
    answer.style.listStyleType = "none";

    answerWrapper.appendChild(radiobox);
    answerWrapper.appendChild(answer);

    answers.appendChild(answerWrapper);
  }

  quizsheet.appendChild(answers);

  const btnNext = document.createElement("button");
  btnNext.className = "btnNext";
  btnNext.textContent = "Next";
  quizsheet.appendChild(btnNext);

  const answerSheet = document.createElement("div")
  answerSheet.className = "answerSheet"

  const body = document.getElementsByTagName("body")[0];
  body.appendChild(answerSheet)
  body.appendChild(quizsheet);

  
 
  btnNext.addEventListener("click", () => {
    const selected = document.querySelector("input[name='radioName']:checked").value
    if(selected === qArray[i].answers[qArray[i].correctAnswerIndex]){
        count += 1
    }
   
    quizsheet.remove();
    
    if(i + 1 < qArray.length){
        showQuiz(qArray, i + 1);

    } else {
        if(count<1){
            answerSheet.innerHTML = `Oops! Your score is: ${count}`
        } else {
            answerSheet.innerHTML = `Good! Your score is: ${count}`
        }
        
    }
  });
}



showQuiz(quizArray, 0);

