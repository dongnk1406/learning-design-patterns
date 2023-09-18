// Ref: https://www.youtube.com/watch?v=-ptMtJAdj40&list=PLZlA0Gpn_vH9kocFX7R7BAe_CvvOCO_p9&index=2
// Open for extension, close for modification

class BooleanQuestion {
  constructor(_description) {
    this.description = _description;
  }
  printQuestionChoice() {
    console.log("This is boolean choice");
  }
}

class MultipleChoiceQuestion {
  constructor(_description, _options) {
    this.description = _description;
    this.options = _options;
  }

  printQuestionChoice() {
    this.options.forEach((option, index) => {
      console.log(index + " - " + option);
    });
  }
}

class TextQuestion {
  constructor(_description) {
    this.description = _description;
  }
  printQuestionChoice() {
    console.log("This is text choice");
  }
}

function printQuiz(questions) {
  questions.forEach((question) => {
    console.log("Description:", question.description);
    question.printQuestionChoice();
  });
}

const questions = [
  new BooleanQuestion("Boolean choice"),
  new MultipleChoiceQuestion("Multiple choice", ["Js", "Kotlin", "Python"]),
  new TextQuestion("Text choice"),
];

printQuiz(questions);
