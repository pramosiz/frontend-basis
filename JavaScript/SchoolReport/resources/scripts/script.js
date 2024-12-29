let marks = [7, 4, 2, 9, 6]

function showMarks() {
    let lista = document.getElementById("marksList")

    for (let mark of marks) {
        let item = document.createElement("li")
        item.innerText = mark
        lista.appendChild(item)
    }
}

function calculateMean() {
    let sum = marks.reduce((a, b) => a + b, 0)
    let mean = sum / marks.length
    document.getElementById("mean").textContent = mean
}

function calculateHighestMark() {
    let highestMark = Math.max(...marks)
    document.getElementById("highestMark").textContent = highestMark
}

function calculateAnyMarkNoPass() {
    let anyMarkNoPass = marks.some(mark => mark < 5)
    document.getElementById("anyMarkNoPass").textContent = anyMarkNoPass ? "Yes" : "No"
}