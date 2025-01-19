const express = require("express")
const cors = require("cors")
const app = express()

const mySQL = require("./connection")
const security = require("./seguridad")

app.use(cors())
app.use(express.json())

app.post("/usuarios/login", (pedido, respuesta) => {
    let emailCrypt = security.myEncrypt(pedido.body.email)
    let passHashing = security.myHash(pedido.body.pass)
    mySQL.connection.query('SELECT id FROM usuarios WHERE (administrador = 0 AND email = "' + emailCrypt + '" AND pass = "' + passHashing + '") ' +
        'OR (administrador = 1 AND email = "' + pedido.body.email + '" AND pass = "' + pedido.body.pass + '")', function (error, resultados) {
            if (error) throw error
            if (resultados.length === 0)
                respuesta.send(undefined)
            else
                respuesta.send(security.createToken(resultados[0].id, pedido.body.email))
        })
})

app.post("/usuarios/create", (pedido, respuesta) => {
    let emailCrypt = security.myEncrypt(pedido.body.email)
    let passHashing = security.myHash(pedido.body.pass)
    mySQL.connection.query('INSERT INTO usuarios (email, pass, administrador) VALUES ("' + emailCrypt + '", "' + passHashing + '", 0)', function (error, resultados) {
        if (error) throw error
        mySQL.connection.query('INSERT INTO permisosxusuario VALUES (' + resultados['insertId'] + ', 2)', function (error, resultados) {
            if (error) throw error
            respuesta.send(true)
        })
    })
})

app.get("/ofertas", (pedido, respuesta) => {
    mySQL.connection.query('SELECT * FROM ofertas', function (error, resultados) {
        if (error) throw error
        respuesta.send(resultados)
    })
})

app.post("/validate", security.validateToken, (pedido, respuesta) => {
    mySQL.connection.query('SELECT p.pagina FROM permisos p JOIN permisosxusuario u ON u.permiso_id = p.id '
        + 'WHERE u.usuario_id = "' + pedido.user_id + '" AND p.nombre = "' + pedido.body.permiso + '"', (error, resultados) => {
            if (error) throw error
            if (resultados.length === 0)
                respuesta.send(undefined)
            else
                respuesta.send(resultados[0].pagina)
        })
})

app.listen(3000, () => {
    console.log("El servidor esta en línea")
})