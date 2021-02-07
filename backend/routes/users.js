var express = require('express');
let mysql = require('mysql2');
let dbCreds = require("../../../dbCreds.json");
var router = express.Router();

/* cRud GET users listing. */
router.get('/', function(req, res, next) {
    // https://myurl.com/api/v1/myRESTapi?id=N


    let mySQLQuery;
    if (req.query.id) { // "" == false. " " == true 
        mySQLQuery = `SELECT * FROM data WHERE id = '${req.query.id}'`;
    } else {
        mySQLQuery = "SELECT * FROM data";
    }


    let connection = mysql.createConnection(dbCreds);
    connection.connect();

    connection.query(mySQLQuery, (error, results) => {
        if (error) {
            console.log(error)
            res.send(500);
        }
        res.send(results);
    })
    connection.end();
});

router.get('/:id', function(req, res, next) {
    // https://myurl.com/api/v1/myRESTapi?id=N


    let mySQLQuery = `SELECT * FROM data WHERE id = '${req.params.id}'`;


    let connection = mysql.createConnection(dbCreds);
    connection.connect();

    connection.query(mySQLQuery, (error, results) => {
        if (error) {
            console.log(error)
            res.send(500);
        }
        res.send(results);
    })
    connection.end();
});

router.post('/', function(req, res, next) {

    let mySQLQuery = `INSERT INTO data (id, name) VALUES (${req.body.id}, '${req.body.name}')`;

    let connection = mysql.createConnection(dbCreds);
    connection.connect();

    connection.query(mySQLQuery, (error, results) => {
        if (error) {
            console.log(error)
            res.send(500);
        }
        res.sendStatus(201);
    })

    connection.end();
});

router.put('/:id', (req, res, next) => {
    let connection = mysql.createConnection(dbCreds);
    connection.connect();

    let mySQLQuery = `UPDATE data SET name = '${req.body.name}'  WHERE id = ${req.params.id}`;
    connection.query(mySQLQuery, (error, results) => {
        if (error) {
            console.log(error)
            res.send(500);
        }
        res.send();
    })

    connection.end();
})

module.exports = router;