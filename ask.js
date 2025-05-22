const readline = require('readline');
const rl = readline.Interface({
    input: process.stdin,
    output: process.stdout
});

const questions = [
    "What is your name?",
    "Where do you live?",
    "What are you going to do with Node.js?"
];

function collectAnswers(questions, done) {
    const answers = [];

    const questionAnswered = (answer) => {
        answers.push(answer.trim());
        if (answers.length < questions.length) {
            rl.question(
                questions[answers.length],
                questionAnswered
            );
        } else {
            return done(answers);
        }
    }
    rl.question(questions[0], questionAnswered);
}
//Using anonymous function is done()
collectAnswers(questions, (answers) => {
    console.log("Thank you for your answers! ");
    console.log(answers);
    process.exit();
});