var mysql = require("mysql");
var inquirer = require("inquirer");
var prompt = require('prompt');

// ** CONNECTS TO THE DATABASE ** 
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    // Your username
    user: "root",
    // Your password -- Removed for security 
    password: "",
    database: "Bamazon"
});

// Calls this function and tests for errors
connection.connect(function(err) {
    // If there is an error, log it 
    if (err) throw err;
    console.log("connected as id" + connection.threadId);
});

function startStore() {

    // Prints the database to the console & logs errors
    connection.query('SELECT * FROM Bamazon.products', function(err, response) {
        if (err) throw err;
        console.log("===================================================")
        console.log("               Bamazon Inventory:                  ")
        console.log("---------------------------------------------------")
        console.log(response);
        console.log("===================================================")

    });

    // Inqueries on buying w/ ID
    inquirer.prompt([{
            name: "idRequest",
            type: "input",
            message: "What is the ID of the item you would like to buy?"
        },
        {
            name: "quantityRequest",
            type: "input",
            message: "How many of this item would you like to buy?"
        }
    ]).then(function(order) {
        var quantityRequest = order.quantityRequest;
        var idRequest = order.idRequest;
        // var item_id = (connection.query('SELECT * FROM Bamazon.products'));
        connection.query('SELECT * FROM Bamazon.products WHERE item_id =' + idRequest, function(err, selectedItem) {
            if (err) throw err;
            if (selectedItem[0].stock_quantity - quantityRequest >= 0) {
                console.log("Amount in stock: " + selectedItem[0].stock_quantity + ", Order Quantity: " + quantityRequest + ", Price: $" + selectedItem[0].price);
                console.log("You have been charged: $" + (order.quantityRequest * selectedItem[0].price));
                connection.query('UPDATE Bamazon.products SET stock_quantity=? WHERE item_id=?', [selectedItem[0].stock_quantity - quantityRequest, selectedItem[0].item_id],
                    function(err, response) {
                        if (err) throw err;
                        startStore();
                        console.log("                      ");

                    });
            } else {
                console.log("Oops! We do not have enough of that item. Currently, we have " + selectedItem[0].stock_quantity + " " + selectedItem[0].product_name + " in stock. Please lower your quantity or check back another time.");
            }
        });

    });
};

startStore();