let endingTime
let timeInterval

function startCountdown() {
    endingTime = setTimeout(timeOver, 30000)
    timeInterval = setInterval(updateTime, 1000)
    document.getElementById("countdown").textContent = 30
}

function updateTime() {
    let time = document.getElementById("countdown").textContent
    document.getElementById("countdown").textContent = time - 1
}

function timeOver() {
    clearInterval(timeInterval)
    document.getElementById("countdown").textContent = "0"
    document.getElementById("audio").play()
    alert("¡Se acabó el tiempo!")
}

function checkAnswers() {
    clearTimeout(endingTime)
    clearInterval(timeInterval)
    let date = new Date()
    let answer1 = document.getElementById("answer1").value
    let answer2 = document.getElementById("answer2").value
    let answer3 = document.getElementById("answer3").value
    let answer4 = document.getElementById("answer4").value
    let answer5 = document.getElementById("answer5").value

    let message = date.toLocaleDateString('es-ES') + "\n" +
        "1. " + answer1 + "\n" +
        "2. " + answer2 + "\n" +
        "3. " + answer3 + "\n" +
        "4. " + answer4 + "\n" +
        "5. " + answer5 + "\n"
    alert(message)
}

function reset() {
    location.reload()
}