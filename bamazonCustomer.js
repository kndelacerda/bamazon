var mysql = require("mysql");
var inquirer = require("inquirer");
var prompt = require('prompt');

// ** HOW TO CONNECT TO A DATABASE IN JS / NODE **
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    // Your username
    user: "root",
    // Your password -- Removed for security 
    password: "Freedom22@",
    database: "Bamazon"
});

// How to call this function and test for an error
connection.connect(function(err) {
    // If there is an error, log it 
    if (err) throw err;
    console.log("connected as id" + connection.threadId);
});

// How to print the database to the console & log errors
connection.query('SELECT * FROM Bamazon.products', function(err, response) {
    if (err) throw err;
    console.log("===================================================")
    console.log("               Bamazon Inventory:                  ")
    console.log("---------------------------------------------------")
    console.log(response);
    console.log("===================================================")

});

// Inqueries on buying w/ ID
var start = function() {
    inquirer.prompt({
        name: "buyItem",
        type: "input",
        message: "What is the ID of the item you would like to buy?",
        // choices: ["POST", "BID"]
    }).then(function(answer) {
        // based on their answer, either call the bid or the post functions
        if (answer.postOrBid.toUpperCase() === "POST") {
            postAuction();
        } else {
            bidAuction();
        }
    });
};