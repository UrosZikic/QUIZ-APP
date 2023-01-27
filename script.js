///////////////////
var submit = document.querySelector(".submit-btn");
var next = document.querySelector(".next-btn");
var question = document.querySelector(".question");
var questionMark = document.querySelector(".question-mark");
var questionNumber = document.querySelector(".questionNumber");
var labelFour = document.querySelector(".labelFour");
var answerOne = document.querySelector("#answerOne");
var answerTwo = document.querySelector("#answerTwo");
var answerThree = document.querySelector("#answerThree");
var answerFour = document.querySelector("#answerFour");
var labelOne = document.querySelector(".labelOne");
var labelTwo = document.querySelector(".labelTwo");
var labelThree = document.querySelector(".labelThree");
var hintBtn = document.querySelector(".hint-btn");
var hint = document.querySelector(".hint");
var hintRevealed = document.querySelector(".hint-revealed");
var checkMark = document.querySelector(".checkmark");
var loadingBar = document.querySelector(".loading-bar");
var redo = document.querySelector(".redo");
const correct = document.querySelector(".correct");
const incorrect = document.querySelector(".incorrect");

var points = 0;
var submitCount = 0;
var hintToggle = 0;
var revealedHint = 1;
answerOne.checked = false;
answerTwo.checked = false;
answerThree.checked = false;
answerFour.checked = false;
submit.disabled = "true";
checkboxes = document.querySelectorAll(".answer");

answerOne.addEventListener("click", () => {
  answerTwo.checked = false;
  answerThree.checked = false;
  answerFour.checked = false;
});
answerTwo.addEventListener("click", () => {
  answerOne.checked = false;
  answerThree.checked = false;
  answerFour.checked = false;
});
answerThree.addEventListener("click", () => {
  answerTwo.checked = false;
  answerOne.checked = false;
  answerFour.checked = false;
});
answerFour.addEventListener("click", () => {
  answerTwo.checked = false;
  answerThree.checked = false;
  answerOne.checked = false;
});

checkboxes.forEach((box) => {
  if (box.checked == false) {
    submit.disabled = true;
  }
  box.onclick = () => {
    submit.disabled = false;
  };
});

redo.onclick = () => {
  location.reload();
};

hintBtn.onclick = () => {
  if (hintToggle % 2 == 0) {
    hint.style.opacity = "1";
    hintBtn.style.color = "white";
    hintToggle += 1;
    hintRevealed.style.opacity = "1";
  } else if (hintToggle % 2 == 1) {
    hint.style.opacity = "0";
    hintBtn.style.color = "black";
    hintToggle += 1;
    hintRevealed.style.opacity = "0";
  }
};
checkMark.onclick = () => {
  hint.style.display = "none";
  hintRevealed.style.display = "block";
  hintRevealed.style.opacity = "1";

  if (revealedHint == 1) {
    hintRevealed.innerHTML =
      "Some words have the same meaning in a certain context";
  } else if (revealedHint == 2) {
    hintRevealed.innerHTML = "the pronoun is not possessive";
  } else if (revealedHint == 3) {
    hintRevealed.innerHTML = "Correlative conjunctions have only one pair";
  } else if (revealedHint == 4) {
    hintRevealed.innerHTML = "to receive a service";
  } else if (revealedHint == 5) {
    hintRevealed.innerHTML = "to avoid danger";
  }
  points -= 50;
};
var time = document.querySelector(".time");
var startCover = document.querySelector(".start-cover");
var timeTotal = 20;

var stopwatch;
var start = (document.querySelector(".start").onclick = () => {
  startCover.style.display = "none";
  stopwatch = setInterval(startMe, 1000);
});

function startMe() {
  timeTotal -= 1;
  time.innerHTML = timeTotal;
  if (timeTotal <= 0) {
    timeTotal += 0;
    time.innerHTML = "0";
    checkboxes.forEach((item) => (item.checked = false));
    submit.disabled = false;
    submit.click();
  }
}

// //////////////////////////
submit.onclick = () => {
  clearInterval(stopwatch);
  submit.disabled = true;
  hintBtn.style.display = "none";

  hint.style.opacity = "0";
  hintRevealed.style.opacity = "0";
  hintBtn.style.color = "black";
  ///////////////////
  checkboxes.forEach((item) => (item.disabled = "true"));

  if (submitCount == 0) {
    if (document.querySelector("#answerFour").checked) {
      questionMark.innerHTML = labelFour.innerHTML;
      correct.style.display = "inline-block";
      incorrect.style.display = "none";
      points += 100;
      submitCount = 0;
      submit.disabled = "true";
      next.style.display = "inline-block";
      loadingBar.style.width = "4rem";
    } else {
      questionMark.innerHTML = "?";
      incorrect.style.display = "inline-block";
      correct.style.display = "none";
      submit.disabled = true;
      next.style.display = "inline-block";
      loadingBar.style.width = "4rem";
      points += 0;
      submitCount = 0;
    }
  }

  // //////////////////
  if (submitCount == 1) {
    if (document.querySelector("#answerTwo").checked) {
      correct.style.disabled = "inline-block";

      // /////
      questionMark.innerHTML = labelTwo.innerHTML;
      var iconHappy =
        '<ion-icon name="happy-outline" style="color: green;"></ion-icon>';

      question.innerHTML =
        `Harry to ${questionMark.innerHTML} the owl named Hedwig brought the letters, is the boy who lived.` +
        iconHappy;

      correct.style.display = "inline-block";
      incorrect.style.display = "none";
      points += 100;
      submitCount = 1;
      submit.disabled = "true";
      next.style.display = "inline-block";
      loadingBar.style.width = "8rem";
    } else {
      var iconSad =
        '<ion-icon name="sad-outline" style="color: red;"></ion-icon>';
      question.innerHTML =
        `Harry to ${questionMark.innerHTML} the owl named Hedwig brought the letters, is the boy who lived.` +
        iconSad;
      questionMark.innerHTML = "?";
      incorrect.style.display = "inline-block";
      correct.style.display = "none";
      submit.disabled = "true";
      next.style.display = "inline-block";
      points += 0;
      submitCount = 1;
      loadingBar.style.width = "8rem";
    }
  }
  // //////////////////////////
  // //////////////////
  if (submitCount == 2) {
    if (document.querySelector("#answerThree").checked) {
      correct.style.disabled = "inline-block";

      // /////
      questionMark.innerHTML = labelThree.innerHTML;
      var iconHappy =
        '<ion-icon name="happy-outline" style="color: green;"></ion-icon>';

      question.innerHTML =
        `Neither Brian ${questionMark.innerHTML}  his wife mentioned anything about moving house. ` +
        iconHappy;

      correct.style.display = "inline-block";
      incorrect.style.display = "none";
      points += 100;
      submitCount = 2;
      submit.disabled = "true";
      next.style.display = "inline-block";
      loadingBar.style.width = "12rem";
    } else {
      var iconSad =
        '<ion-icon name="sad-outline" style="color: red;"></ion-icon>';
      question.innerHTML =
        `Neither Brian ${questionMark.innerHTML}  his wife mentioned anything about moving house. ` +
        iconSad;
      questionMark.innerHTML = "?";
      incorrect.style.display = "inline-block";
      correct.style.display = "none";
      submit.disabled = "true";
      next.style.display = "inline-block";
      points += 0;
      submitCount = 2;
      loadingBar.style.width = "12rem";
    }
  }

  // //////////////////
  if (submitCount == 3) {
    if (document.querySelector("#answerOne").checked) {
      correct.style.disabled = "inline-block";

      // /////
      questionMark.innerHTML = labelOne.innerHTML;
      var iconHappy =
        '<ion-icon name="happy-outline" style="color: green;"></ion-icon>';

      question.innerHTML =
        `Alice  ${questionMark.innerHTML} her hair done in a nearby hair salon. ` +
        iconHappy;

      correct.style.display = "inline-block";
      incorrect.style.display = "none";
      points += 100;
      submitCount = 3;
      submit.disabled = "true";
      next.style.display = "inline-block";
      loadingBar.style.width = "16rem";
    } else {
      var iconSad =
        '<ion-icon name="sad-outline" style="color: red;"></ion-icon>';
      question.innerHTML =
        `Alice  ${questionMark.innerHTML} her hair done in a nearby hair salon. ` +
        iconSad;
      questionMark.innerHTML = "?";
      incorrect.style.display = "inline-block";
      correct.style.display = "none";
      submit.disabled = "true";
      next.style.display = "inline-block";
      points += 0;
      submitCount = 3;
      loadingBar.style.width = "16rem";
    }
  }
  /////////////////////////////////
  if (submitCount == 4) {
    if (document.querySelector("#answerThree").checked) {
      correct.style.disabled = "inline-block";

      // /////
      questionMark.innerHTML = labelThree.innerHTML;
      var iconHappy =
        '<ion-icon name="happy-outline" style="color: green;"></ion-icon>';

      question.innerHTML =
        `you should stop running while holding scissors ${questionMark.innerHTML} you hurt yourself.` +
        iconHappy;

      correct.style.display = "inline-block";
      incorrect.style.display = "none";
      points += 100;
      submitCount = 4;
      submit.disabled = "true";
      next.style.display = "none";
      loadingBar.style.width = "20rem";
    } else {
      var iconSad =
        '<ion-icon name="sad-outline" style="color: red;"></ion-icon>';
      question.innerHTML =
        `you should stop running while holding scissors ${questionMark.innerHTML} you hurt yourself.` +
        iconSad;
      questionMark.innerHTML = "?";
      incorrect.style.display = "inline-block";
      correct.style.display = "none";
      submit.disabled = "true";
      next.style.display = "none";
      points += 0;
      submitCount = 4;
      loadingBar.style.width = "20rem";
    }
    document.querySelector(".points").innerHTML = points / 5;
    if (points / 5 <= 20) {
      document.querySelector(".grade").innerHTML = "F";
    } else if (points / 5 <= 40) {
      document.querySelector(".grade").innerHTML = "D";
    } else if (points / 5 <= 60) {
      document.querySelector(".grade").innerHTML = "C";
    } else if (points / 5 <= 80) {
      document.querySelector(".grade").innerHTML = "B";
    } else if (points / 5 >= 90) {
      document.querySelector(".grade").innerHTML = "A";
    }
    document.querySelector(".score").style.opacity = "1";
    document.querySelector(".points").style.opacity = "1";
    document.querySelector(".grade").style.opacity = "1";
  }

  answerOne.checked = false;
  answerTwo.checked = false;
  answerThree.checked = false;
  answerFour.checked = false;
};

next.onclick = () => {
  timeTotal = 20;
  time.innerHTML = "20";
  stopwatch = setInterval(startMe, 1000);

  submit.disabled = true;
  hintRevealed.style.display = "none";
  // hintRevealed.innerHTML = "";
  hint.style.display = "block";
  hint.style.opacity = "0";
  hintBtn.style.color = "black";
  hintBtn.style.display = "block";
  correct.style.disabled = "none";
  incorrect.style.disabled = "none";
  checkboxes.forEach((item) => (item.disabled = false));

  answerOne.checked = false;
  answerTwo.checked = false;
  answerThree.checked = false;
  answerFour.checked = false;

  if (submitCount == 0) {
    questionMark.innerHTML = "?";
    questionNumber.innerHTML = "Question 2";
    question.innerHTML = `Harry to ${questionMark.innerHTML} the owl named Hedwig brought the letters, is the boy who lived.`;
    labelOne.innerHTML = "whose";
    labelTwo.innerHTML = "whom";
    labelThree.innerHTML = "who";
    labelFour.innerHTML = "his";
    next.style.display = "none";
    revealedHint = 2
  }
  if (submitCount == 1) {
    questionMark.innerHTML = "?";
    questionNumber.innerHTML = "Question 3";
    question.innerHTML = `Neither Brian ${questionMark.innerHTML}  his wife mentioned anything about moving house. `;
    labelOne.innerHTML = "or";
    labelTwo.innerHTML = "and";
    labelThree.innerHTML = "nor";
    labelFour.innerHTML = "but";
    next.style.display = "none";
    revealedHint = 3
  }
  if (submitCount == 2) {
    questionMark.innerHTML = "?";
    questionNumber.innerHTML = "Question 4";
    question.innerHTML = `Alice  ${questionMark.innerHTML} her hair done in a nearby hair salon. `;
    labelOne.innerHTML = "had";
    labelTwo.innerHTML = "did";
    labelThree.innerHTML = "made";
    labelFour.innerHTML = "styled";
    next.style.display = "none";
    revealedHint = 4
  }
  if (submitCount == 3) {
    questionMark.innerHTML = "?";
    questionNumber.innerHTML = "Question 5";
    question.innerHTML = `you should stop running while holding scissors ${questionMark.innerHTML} you hurt yourself.`;
    labelOne.innerHTML = "unless";
    labelTwo.innerHTML = "until";
    labelThree.innerHTML = "lest";
    labelFour.innerHTML = "will";
    next.style.display = "none";
    revealedHint = 5
  }
};
next.addEventListener("click", () => {
  submitCount += 1;
});
