// ================Dependencies=================================
var express = require("express");
var bodyParser = require("body-parser");

// ===============Sets up the Express App=======================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ==========================ROUTER==============================

require("./app/routes/apiRoutes")(app);
require("./app/routes/htmlRoutes")(app);

// =====================LISTENER=================================
// Starts the server to begin listening

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
