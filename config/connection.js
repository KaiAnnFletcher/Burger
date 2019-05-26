// Set up MySQL connection.
const mysql = require("mysql");

let connection;
//code required for Heroku deployment
 if(process.env.JAWSDB_URL){
   console.log("Jaws");
   connection = mysql.createConnection(process.env.JAWSDB_URL);
 } else {
   console.log("Jaws1");
   connection = mysql.createConnection({
   host: "localhost",
   user: "root",
   password: "root",
  database: "burgers_db"
 });
 }
/*connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "root",
  database: "burgers_db"
});*/

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;