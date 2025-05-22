import { collectAnswers } from './lib/collectAnswers.js';

const questions = [
    "What is your name?",
    "Where do you live?",
    "What are you going to do with Node.js?"
];

//Using anonymous function is done()
const answersEvents = collectAnswers(questions, (answers) => {
    console.log("Thank you for your answers! ");
    console.log(answers);
    process.exit();
});

answersEvents.on("custom-event-answer", answer => {
    console.log(`The input was: ${answer}`);
});