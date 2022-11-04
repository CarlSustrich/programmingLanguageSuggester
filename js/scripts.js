/* steps
hide sections
make each button hide current section & unhide next section, dont forget preventdefault on submit
make index for each language
++ an index for each answer
find index with highest value
replace results text with highest value text
make start over button refresh page */

function hideIntoShowQ1 (event) {
  event.preventDefault();
  // nextBtn.removeEventListener("click", hideIntoShowQ1);
  document.getElementById("intro").setAttribute("class", "hidden");
  document.getElementById("question1").removeAttribute("class");

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
  document.getElementById("question2").removeAttribute("class");
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
  document.getElementById("question3").removeAttribute("class");
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
  document.getElementById("question4").removeAttribute("class");
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
  document.getElementById("question5").removeAttribute("class");
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
});
