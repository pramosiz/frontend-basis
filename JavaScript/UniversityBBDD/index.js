// Configure Express
const express = require('express')
const app = express()

// Save MySQL component
const mysql = require('./connection')
app.use(express.json())

// GET student
app.get('/students/:id', (req, res) => {
    mysql.query('SELECT * FROM students WHERE id = ?', [req.params.id], (error, result) => {
        if (error) throw error
        res.send(result)
    })
})

// POST new student
app.post('/students/create', (req, res) => {
    mysql.query('INSERT INTO students SET ?', req.body, (error, result) => {
        if (error) throw error
        res.send('Student added to the database')
    })
})

// POST mark
app.post('/marks/create', (req, res) => {
    mysql.query('INSERT INTO exam SET ?', req.body, (error, result) => {
        if (error) throw error
        res.send('Mark added to the database')
    })
})

// PUT mark
app.put('/marks/update/:id', (req, res) => {
    mysql.query('UPDATE exam SET ? WHERE id = ?', [req.body, req.params.id], (error, result) => {
        if (error) throw error
        res.send('Mark updated in the database')
    })
})

// Start server on port 3000
app.listen(3000, () => {
    console.log('Server started on http://localhost:3000')
})