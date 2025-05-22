import readline from 'node:readline';
import EventEmitter from 'node:events';

const rl = readline.Interface({
    input: process.stdin,
    output: process.stdout
});

const collectAnswers = (questions, done) => {
    const answers = [];
    const emitter = new EventEmitter();

    const questionAnswered = (answer) => {
        emitter.emit("custom-event-answer", answer);
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

    return emitter;
}

export { collectAnswers }