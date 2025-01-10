// Functions
function loadContent() {

    loadQuotes(showQuotes)
    loadElemets()
    loadTexts()
}

async function loadQuotes(callback) {
    try {

        await delay(2000)
        let promise1 = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
        callback(await promise1.json())

        let promise2 = await fetch('https://open.er-api.com/v6/latest/USD')
        let data2 = await promise2.json()
        document.getElementById("usdEur").append(data2.rates.EUR)

        let promise3 = await fetch('https://open.er-api.com/v6/latest/ARS')
        let data3 = await promise3.json()
        document.getElementById("usdArs").append(data3.rates.USD)

        document.getElementById("imgWait").style.visibility = "hidden"
    } catch (error) {
        console.error(error)
    }
}

function showQuotes(data) {
    document.getElementById("bitcoinUsd").append(data.bpi.USD.rate)
}

function loadElemets() {
    document.getElementById("imgLogo").setAttribute("src", "resources/images/money.jpg")
    document.getElementById("title1").textContent = "Quotation Site Online"
    let imgWait = document.getElementById("imgWait")
    imgWait.setAttribute("src", "resources/images/loading.gif")
    imgWait.style.visibility = "visible"
}

function loadTexts() {
    document.getElementById("bitcoinUsd").append("Bitcoin to USD: ")
    document.getElementById("usdEur").append("USD to EUR: ")
    document.getElementById("usdArs").append("USD to ARS: ")
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}