const mysql = require('mysql2');
const dbCreds = require("../../../dbCreds.json");

connection = mysql.createConnection(dbCreds);
connection.connect();

connection.query('SELECT * FROM data', function(error, results, fields) {
    if (error) throw error;
    console.log(results);
});

connection.end();