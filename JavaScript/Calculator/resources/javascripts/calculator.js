function showResult(result) {
    $("#result").val(result)
}

function add() {
    let num1 = +$("#field1").val()
    let num2 = +$("#field2").val()
    showResult(num1 + num2)
}

function subtract() {
    let num1 = +$("#field1").val()
    let num2 = +$("#field2").val()
    showResult(num1 - num2)
}

function multiply() {
    let num1 = +$("#field1").val()
    let num2 = +$("#field2").val()
    showResult(num1 * num2)
}

function divide() {
    let num1 = +$("#field1").val()
    let num2 = +$("#field2").val()
    showResult(num1 / num2)
}

function root() {
    let num1 = +$("#field1").val()
    showResult(Math.sqrt(num1))
}

function power() {
    let num1 = +$("#field1").val()
    let num2 = +$("#field2").val()
    showResult(Math.pow(num1, num2))
}

function absoulte() {
    let num1 = +$("#field1").val()
    showResult(Math.abs(num1))
}

function random() {
    let num1 = +$("#field1").val()
    let num2 = +$("#field2").val()
    showResult(Math.floor(Math.random() * (num2 - num1 + 1)) + num1)
}

function round() {
    let num1 = +$("#field1").val()
    showResult(Math.round(num1))
}

function ceil() {
    let num1 = +$("#field1").val()
    showResult(Math.ceil(num1))
}

function floor() {
    let num1 = +$("#field1").val()
    showResult(Math.floor(num1))
}