var questions = document.querySelectorAll(".question");

// //this code, when user opens second question, previous questions closes.
questions.forEach((question) => {
    question.addEventListener("click", () => {
        if (question.classList.contains("open")) {
            question.classList.remove("open")
        } else {
            var questionIsOpen = document.querySelectorAll(".open")

            questionIsOpen.forEach((quest) => {
                quest.classList.remove("open")
            })

            question.classList.add("open")

        }
    })
})

