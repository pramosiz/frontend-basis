// Variables
let mySelector = document.getElementById('mySelect')
let myInput = document.getElementById('myInput')
let myButton = document.getElementById('myButton')
let myList = document.getElementById('myList')

let file = "resources/data/peliculas.json"

// Listeners
mySelector.addEventListener('change', changeFile)
mySelector.addEventListener('changeMode', messageMode)
myInput.addEventListener('keydown', checkInput)
myButton.addEventListener('click', search)

// Functions
function changeFile() {
    file = mySelector.value
    let myEvent = new CustomEvent('changeMode')
    mySelector.dispatchEvent(myEvent)
}

function messageMode() {
    alert("File seeker already is " + mySelector.value)
}

function checkInput(event) {
    if ((event.key < 65 || event.key > 90) && event.key != 32 && event.key != 8) {
        event.preventDefault()
    }
}

function search() {
    myList.innerHTML = ""
    fetch(file)
        .then(response => response.json())
        .then(output => {
            for (let item of output.data) {
                if (item.nombre.startsWith(myInput.value.toUpperCase())) {
                    let p = document.createElement('p')
                    p.id = item.nombre
                    p.innerHTML = item.sinopsis
                    p.style.display = 'none'

                    let li = document.createElement('li')
                    li.innerHTML = item.nombre
                    li.addEventListener("mouseover", function () {
                        let p = document.getElementById(item.nombre)
                        p.style.display = 'block'
                    })

                    li.addEventListener("mouseout", function () {
                        let p = document.getElementById(item.nombre)
                        p.style.display = 'none'
                    })

                    li.appendChild(p)
                    myList.appendChild(li)
                }
            }
        })
        .catch(error => console.log(error))
}
