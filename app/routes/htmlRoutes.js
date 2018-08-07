// ====================DEPENDENCIES================================
var path = require("path");

// ======================ROUTING===================================

module.exports = function(app) {
    // HTML GET Requests for users 'visiting' a page.
    // Below code handles when users "visit" a page.
  
    // If no matching route is found default to home(*)
    app.get("*", function(req, res) {
      res.sendFile(path.join(__dirname, "../app/public/home.html"));
    });
  
    app.get("/survey", function(req, res) {
      res.sendFile(path.join(__dirname, "../app/public/survey.html"));
    });
  };