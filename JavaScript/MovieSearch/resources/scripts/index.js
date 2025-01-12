// Variables
let $mySelector = $('#mySelect')
let $myInput = $('#myInput')
let $myButton = $('#myButton')
let $myList = $('#myList')

let file = "resources/data/peliculas.json"

// Listeners
$mySelector.on('change', changeFile)
$mySelector.on('changeMode', messageMode)
$myInput.on('keydown', checkInput)
$myButton.on('click', search)

// Functions
function changeFile() {
    file = $mySelector.val()
    let myEvent = new CustomEvent('changeMode')
    $mySelector[0].dispatchEvent(myEvent)
}

function messageMode() {
    alert("File seeker already is " + $mySelector.val())
}

function checkInput(event) {
    if ((event.key < 65 || event.key > 90) && event.key != 32 && event.key != 8) {
        event.preventDefault()
    }
}

function search() {
    $myList.empty()
    $.getJSON(file, (output) => {
        $.each(output.data, (index, item) => {
            if (item.nombre.startsWith($myInput.val().toUpperCase())) {
                let $p = $('<p></p>').attr('id', item.nombre).html(item.sinopsis).hide()
                let $li = $('<li></li>').html(item.nombre)
                $li.on('mouseover', () => $p.show())
                $li.on('mouseout', () => $p.hide())
                $li.append($p)
                $myList.append($li)
            }
        })
    }).fail((error) => console.log(error))
}

