const questions = [
    "Qual seu nome?",
    "Como estava o café hoje?",
    "O que aprendi hoje?",
    "O que me deixou aborrecido? O que eu poderia fazer para melhorar essa situação?",
    "O que me deixou feliz hoje?",
    "Quantas pessoas ajudei hoje?",
]


const ask = (index = 0) => {
    process.stdout.write("\n" + questions[index] + " > ")
}

ask()

const answers =[]
process.stdin.on("data", data => {
    answers.push(data.toString().trim())
    if (answers.length < questions.length) {
        ask(answers.length)
    } else{
        console.log(answers)
        process.exit()
    }
})


process.on('exit', () =>{
    console.log(`
    Bom demais, ${answers[0]}!
    Como estava o café hoje?
    R: ${answers[1]}

    O que aprendi hoje?
    R: ${answers[2]}

    O que me deixou aborrecido? O que eu poderia fazer para melhorar essa situação?
    R: ${answers[3]}

    O que me deixou feliz hoje?
    R:  ${answers[4]}

    Quantas pessoas ajudei hoje?
    R: ${answers[5]}

    Volte amanhã para novas reflexões. Boa noite!

    `)
})
