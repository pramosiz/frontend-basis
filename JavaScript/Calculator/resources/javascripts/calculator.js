function showResult(result) {
    document.getElementById("result").value = result
}

function add() {
    let num1 = +document.getElementById("field1").value
    let num2 = +document.getElementById("field2").value
    showResult(num1 + num2)
}

function subtract() {
    let num1 = +document.getElementById("field1").value
    let num2 = +document.getElementById("field2").value
    showResult(num1 - num2)
}

function multiply() {
    let num1 = +document.getElementById("field1").value
    let num2 = +document.getElementById("field2").value
    showResult(num1 * num2)
}

function divide() {
    let num1 = +document.getElementById("field1").value
    let num2 = +document.getElementById("field2").value
    showResult(num1 / num2)
}

function root() {
    let num1 = +document.getElementById("field1").value
    showResult(Math.sqrt(num1))
}

function pow() {
    let num1 = +document.getElementById("field1").value
    let num2 = +document.getElementById("field2").value
    showResult(Math.pow(num1, num2))
}

function absoulte() {
    let num1 = +document.getElementById("field1").value
    showResult(Math.abs(num1))
}

function random() {
    let num1 = +document.getElementById("field1").value
    let num2 = +document.getElementById("field2").value
    showResult(Math.floor(Math.random() * (num2 - num1 + 1)) + num1)
}

function round() {
    let num1 = +document.getElementById("field1").value
    showResult(Math.round(num1))
}

function ceil() {
    let num1 = +document.getElementById("field1").value
    showResult(Math.ceil(num1))
}

function floor() {
    let num1 = +document.getElementById("field1").value
    showResult(Math.floor(num1))
}