
async function getAll() {
    try {
        fetch('https://my-json-server.typicode.com/fedegaray/telefonos/db', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                let $bodyTable = $("#tableContent")
                let output = ""

                for (let item of data.dispositivos) {
                    output +=
                        `<tr>
                            <td>${item.id}</td>
                            <td>${item.marca}</td>
                            <td>${item.modelo}</td>
                            <td>${item.color}</td>
                            <td>${item.almacenamiento} GB</td>
                            <td>${item.procesador}</td>
                        </tr>`
                }
                $bodyTable.html(output)
            })
            .catch(error => { throw new Error("Error in request: " + error) })

    } catch (error) {
        console.error(error);
    }
}

async function checkOne() {
    try {
        let id = +$("#txtCheck").val()
        if (id === "") {
            alert("Enter a valid ID")
            return
        }

        axios.get(`https://my-json-server.typicode.com/fedegaray/telefonos/dispositivos/${id}`)
            .then(response => {
                let device = response.data
                $("#checkName").val(device.marca)
                $("#checkModel").val(device.modelo)
                $("#checkColour").val(device.color)
                $("#checkStorage").val(device.almacenamiento)
                $("#checkProcessor").val(device.procesador)
            })
            .catch(error => { throw new Error("Error in request: " + error) })

    } catch (error) {
        console.error(error);
    }
}

// Doesnt work
async function addOne() {
    try {
        let name = $("#inputName").val()
        let model = $("#inputModel").val()
        let colour = $("#inputColour").val()
        let storage = $("#inputStorage").val()
        let processor = $("#inputProcessor").val()

        fetch('https://my-json-server.typicode.com/fedegaray/telefonos/dispositivos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                marca: name,
                modelo: model,
                color: colour,
                almacenamiento: storage,
                procesador: processor
            })
        })
            .then(response => response.json())
            .then(data => {
                getAll()
                alert("Device added successfully")
            })
            .catch(error => { throw new Error("Error in request: " + error) })
    } catch (error) {
        console.error(error)
    }
}

async function modifyOne() {
    try {
        let name = $("#checkName").val()
        let model = $("#checkModel").val()
        let colour = $("#checkColour").val()
        let storage = $("#checkStorage").val()
        let processor = $("#checkProcessor").val()

        if (name === "") {
            alert("Enter a valid name")
            return
        }

        fetch('https://my-json-server.typicode.com/fedegaray/telefonos/dispositivos', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                marca: name,
                data: {
                    modelo: model,
                    color: colour,
                    almacenamiento: storage,
                    procesador: processor
                }
            })
        })
            .then(response => response.json())
            .then(data => {
                getAll()
                alert("Device was modified successfully")
            })
            .catch(error => { throw new Error("Error in request: " + error) })
    } catch (error) {
        console.error(error)
    }
}

async function deleteOne() {
    try {
        let id = +$("#txtCheck").val()
        if (id === "") {
            alert("Enter a valid ID")
            return
        }

        axios.delete(`https://my-json-server.typicode.com/fedegaray/telefonos/dispositivos/${id}`)
            .then(response => {
                alert("Device was deleted successfully")
                getAll()
            })
            .catch(error => { throw new Error("Error in request: " + error) })

    } catch (error) {
        console.error(error)
    }
}
