// Call mysql component
var mysql = require('mysql2')

// Establish connection with the database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'university'
})

// Connect to the database
connection.connect((error) => {
    if (error) throw error
    console.log('Connection to the database established')
})

// Export for others modules
module.exports = connection