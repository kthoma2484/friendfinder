// ================Dependencies=================================
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require('express-handlebars')

// ===============Sets up the Express App=======================
var app = express();
var PORT = process.env.PORT || 3000;


//=========Handlebars as the default templete Engine=============
// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// ==========================ROUTER==============================

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// =====================LISTENER=================================
// Starts the server to begin listening

app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});

