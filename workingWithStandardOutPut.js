const questions = [
    "Enter Full name: ",
    "Enter Phone number: ",
    "Enter Address: "
];

const answers = [];

function ask(i = 0) {
    process.stdout.write(`\n  ${questions[i]}`);
    process.stdout.write('>>');
}


//asynchronously
process.stdin.on("data", function(data) {
    answers.push(data.toString().trim());
    if (answers.length < questions.length) {
        ask(answers.length)
    } else {
        process.exit();
    }
});

process.on("exit", function() {
    process.stdout.write(`Form input: 
        \n Name: ${answers[0]}
        \n Phone Number: ${answers[1]}
        \n Address: ${answers[2]} 
        \n`);
})

ask();