let score = 0;
let current = 0;
let selected = null;
let answeredCorrectly = false;

const questions = [
  {
    question: "What helps a robot detect objects?",
    options: ["Sensor", "Battery", "Wheel"],
    answer: "Sensor"
  },
  {
    question: "What makes a robot move?",
    options: ["Motor", "Screen", "Light"],
    answer: "Motor"
  },
  {
    question: "What is the robot brain?",
    options: ["Processor", "Wheel", "LED"],
    answer: "Processor"
  }
];

function loadQuestion() {
  let q = questions[current];

  document.getElementById("question").innerText = q.question;

  let optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  document.getElementById("feedback").innerText = "";
  document.getElementById("nextBtn").disabled = true;

  selected = null;
  answeredCorrectly = false;

  q.options.forEach(opt => {
    let btn = document.createElement("button");
    btn.innerText = opt;
    btn.classList.add("option-btn");

    btn.onclick = () => {
      selected = opt;

      let correct = questions[current].answer;

      if (opt === correct) {
        document.getElementById("feedback").innerText = "🎉 Correct! Well done!";
        answeredCorrectly = true;
        score++;
        document.getElementById("nextBtn").disabled = false;
      } else {
        document.getElementById("feedback").innerText =
          "❌ Not correct. Try again until you get it right!";
        answeredCorrectly = false;
        document.getElementById("nextBtn").disabled = true;
      }

      document.getElementById("score").innerText = score;
    };

    optionsDiv.appendChild(btn);
  });
}

function nextQuestion() {
  if (!answeredCorrectly) return;

  current++;

  if (current >= questions.length) {
    document.getElementById("popup").classList.remove("hidden");
    return;
  }

  loadQuestion();
}

function goHome() {
  window.location.href = "index.html";
}

loadQuestion();