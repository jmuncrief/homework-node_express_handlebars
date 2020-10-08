var mysql = require("mysql");
var connection;

if(process.env.JAWSB_URL) {
  connection = mysql.createConnection(process.envJAWSDB_URL)
} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "burger_db"
  })
}


connection.connect(function(err) {
  if (err) {
    console.error("error: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
