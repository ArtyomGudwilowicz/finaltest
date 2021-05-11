const NUMBER_OF_VARIANTS=4

function addTask() {
    const task={
        taskText: '',
        questions:[],
        correctAnswers: [],
    }

    const taskText = createTaskText()
    task.taskText=taskText
    for (let i = 0; i < NUMBER_OF_VARIANTS; i++) {
        const question=createQuestionText(i+1)
        task.questions.push(question)
    }
    const correctAnswers = createCorrectAnswers()
    task.correctAnswers = correctAnswers
    console.log(task)
}

function isCorrectTaskText(taskText) {
    return taskText !==''
}

function createQuestionText(numberQuestion) {
    return prompt(`Введите ${numberQuestion} вариант ответа:`);
}

function createCorrectAnswers() {
    const  correctAnswers=prompt(`Введите правильные варианты ответов:`);
    return correctAnswers.split(',')
}

function createTaskText() {
    const taskText=prompt('Введите текст вопроса:');
    if(isCorrectTaskText(taskText)){
        return taskText
    }else {
        alert('IDI NAXYI')
        createTaskText()
    }
}
