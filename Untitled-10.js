//inisiasi soal dalam quiz
const questions = [
    {

        question: "Jika LCSGLCSKJC dikodekan sebagai MATEMATIKA, maka JTHRSQFTZHH adalah",
        optionA: "KECAMATAN",
        optionB: "KRIPTOGRAFI",
        optionC: "KACAMATA",
        optionD: "KEMENTRIAN",
        correctOption: "optionB"
    },

    {
        question: "Jika LAUT dikodekan sebagai EBNU, maka IJKBGIT adalah?",
        optionA: "MINUMAN",
        optionB: "PANJANG",
        optionC: "SEBELUM",
        optionD: "PIRANHA",
        correctOption: "optionD"
    },

    {
       
        question: "Jika VISEWA adalah kode dari SEPATU, maka LEMARI adalah?",
        optionA: "OIPEUO",
        optionB: "OIPUEO",
        optionC: "IOPUEO",
        optionD: "IOPEOU",
        correctOption: "optionA"
    },

    {
        
        question: "Jika A = C, B = D, dan C = E, maka RGOKUCJCO adalah",
        optionA: "PERHIASAN",
        optionB: "PEMBIASAN",
        optionC: "PEMISAHAN",
        optionD: "PENYIMPANGAN",
        correctOption: "optionC"
    },

    {
        
        question: "Jika GARIS dikodekan sebagai HCUMX, maka PITA adalah? ",
        optionA: "QKWD",
        optionB: "QGWD",
        optionC: "QCWM",
        optionD: "QGMW",
        correctOption: "optionA"
    },

    {
       
        question: "Jika MMVFOHSX adalah kode dari UTBKSKUY, maka KXGVJDYS adalah",
        optionA: "ADAHAHA",
        optionB: "SEMANGAT",
        optionC: "SEMUNGUT",
        optionD: "BELA DIRI",
        correctOption: "optionB"
    },

    {
        
        question: "Jika SEMUT dikodekan sebagai VHPXW, maka ELANG adalah?",
        optionA: "IODQJ",
        optionB: "BIXKD",
        optionC: "IOQDJ",
        optionD: "BIXDK",
        correctOption: "optionA"
    },

    {
        
        question: "Jika STATISTIKA dikodekan sebagai WEXEXMWXMOE, maka PELUANG adalah? ",
        optionA: "TPYERIK",
        optionB: "TYRPEKI",
        optionC: "TIPERYK",
        optionD: "TIPYERK",
        correctOption: "optionD"
    },

    {
        
        question: "Jika NUMERIK dikodekan sebagai SZRJWNP, maka PROGRAM adalah?",
        optionA: "UTWLWFR",
        optionB: "UWLTWRF",
        optionC: "UTWLWRF",
        optionD: "UWTLWFR",
        correctOption: "optionD"
    },

    {
        
        question: "Jika MASKER dikodekan sebagai AMKSRE, maka KAYANG adalah?",
        optionA: "AYANGK",
        optionB: "YANGAK",
        optionC: "AKAYGN",
        optionD: "AKAGNY",
        correctOption: "optionC"
    },

  
    {
        
        question: "Jika KEKERASAN dikodekan sebagai EEAA dan SOLUSI bisa ditulis OUI, maka PERMAISURI adalah?",
        optionA: "EAIUI",
        optionB: "EUIAI",
        optionC: "EUAII",
        optionD: "EIUAI",
        correctOption: "optionA"
    },


    {
        
        question: "Jika SINTAS dikodekan sebagai TKQXFY, maka TAKZIM adalah??",
        optionA: "UVSDNS",
        optionB: "UCSDNS",
        optionC: "UOSDNS",
        optionD: "UCSDMS",
        correctOption: "optionB"
    },

    {
        
        question: "Jika KUNCI dikodekan sebagai CIKUN, maka BUNGA adalah?",
        optionA: "UBGNA",
        optionB: "AUBGN",
        optionC: "NUBAG",
        optionD: "GABUN",
        correctOption: "optionD"
    },

    {
       
        question: "Jika JERAPAH dikodekan sebagai JAREPAH, maka PENGHAPUS adalah?",
        optionA: "PUNGHEPAS",
        optionB: "PENGHUPAS",
        optionC: "PUNGHAPES",
        optionD: "PANGHEPUS",
        correctOption: "optionA"
    },

    {
        
        question: "Jika MEMBUKTIKAN dikodekan sebagai MUMBEKTAKIN, maka PEMASUKAN adalah?",
        optionA: "PEMASAKUN",
        optionB: "PEMUSAKAN",
        optionC: "PAMESAKUN",
        optionD: "PAMESUKAN",
        correctOption: "optionC"
    },


]


let shuffledQuestions = [] //empty array to hold shuffled selected questions

function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1
let playerScore = 0  
let wrongAttempt = 0 
let indexNumber = 0

// function for displaying next question in the array to dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })
   
    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer()
    unCheckRadioButtons()
    //delays next question displaying for a second
    setTimeout(() => {
        if (indexNumber <= 9) {
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 3) {
        remark = "Yaaah, gapapa kamu tetap keren."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Waaah, kamu hebat!"
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Mantap, kamu luar biasa!"
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal and resets game
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}