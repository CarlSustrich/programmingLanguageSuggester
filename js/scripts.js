/* left to do:
figure out how to address ties
figoure out how to remove event listener*/

function hideIntoShowQ1 (event) {
  event.preventDefault();
  document.getElementById("intro").setAttribute("class", "hidden");
  document.getElementById("question1").classList.remove("hidden");
  // nextBtn.removeEventListener("click", hideIntoShowQ1);
}

function countQ1ShowQ2 (event) {
  event.preventDefault();
  const answer1 = document.querySelector("input[name='q1']:checked").value;

  if (answer1 === "r") {
    iRuby ++;
  } else if (answer1 === "c") {
    iC ++;
  } else if (answer1 === "p") {
    iPython ++;
  }
  document.getElementById("question1").setAttribute("class", "hidden");
  document.getElementById("question2").classList.remove("hidden");
}

function countQ2ShowQ3 (event) {
  event.preventDefault();
  const answer2 = document.querySelector("input[name='q2']:checked").value;

  if (answer2 === "r") {
    iRuby++;
  } else if (answer2 === "c") {
    iC++;
  } else if (answer2 === "p") {
    iPython++;
  }
  document.getElementById("question2").setAttribute("class", "hidden");
  document.getElementById("question3").classList.remove("hidden");
}

function countQ3ShowQ4(event) {
  event.preventDefault();
  const answer3 = document.querySelector("input[name='q3']:checked").value;

  if (answer3 === "r") {
    iRuby++;
  } else if (answer3 === "c") {
    iC++;
  } else if (answer3 === "p") {
    iPython++;
  }
  document.getElementById("question3").setAttribute("class", "hidden");
  document.getElementById("question4").classList.remove("hidden");
}

function countQ4ShowQ5(event) {
  event.preventDefault();
  const answer4 = document.querySelector("input[name='q4']:checked").value;

  if (answer4 === "r") {
    iRuby++;
  } else if (answer4 === "c") {
    iC++;
  } else if (answer4 === "p") {
    iPython++;
  }
  document.getElementById("question4").setAttribute("class", "hidden");
  document.getElementById("question5").classList.remove("hidden");
}

function countQ5(event) {
  event.preventDefault();
  const answer5 = document.querySelector("input[name='q5']:checked").value;

  if (answer5 === "r") {
    iRuby++;
  } else if (answer5 === "c") {
    iC++;
  } else if (answer5 === "p") {
    iPython++;
  }
  document.getElementById("question5").setAttribute("class", "hidden");

}

function showResult (event) {
  event.preventDefault;
  let languageSpan = document.getElementById("languageSpan");
  let descriptionSpan = document.getElementById("descriptionSpan");
  document.getElementById("result").classList.remove("hidden");
  if ((iRuby > iC) && (iRuby>iPython)) {
    languageSpan.innerText = "Ruby";
    descriptionSpan.innerText = "Here's some info about Ruby";
  } else if ((iC > iRuby) && (iC > iPython)) {
    languageSpan.innerText = "C#";
    descriptionSpan.innerText = "Here's some info about C#";
  } else if ((iPython>iRuby)&&(iPython>iC)) {
    languageSpan.innerText = "Python";
    descriptionSpan.innerText = "Here's some info about Python";
  }
}

function refreshPage() {
  window.location.reload();
}

let iRuby = 0
let iC = 0
let iPython = 0

window.addEventListener("load", function () {

// hide intro, show q1
  let nextBtn = document.querySelector("button#next");
  nextBtn.addEventListener("click", hideIntoShowQ1);
  // parse q1
  let q1 = document.getElementById("q1");
  q1.addEventListener("submit", countQ1ShowQ2);
  //parse q2
  let q2 = document.getElementById("q2");
  q2.addEventListener("submit", countQ2ShowQ3);
  //parse q3
  let q3 = document.getElementById("q3");
  q3.addEventListener("submit", countQ3ShowQ4);
  //parse q4
  let q4 = document.getElementById("q4");
  q4.addEventListener("submit", countQ4ShowQ5);
  //parse q5
  let q5 = document.getElementById("q5");
  q5.addEventListener("submit", countQ5);
  //fill results text
  q5.addEventListener("submit", showResult);
  //reload btn
  let reloadBtn = document.getElementById("refresh");
  reloadBtn.addEventListener ("click", refreshPage);
});
