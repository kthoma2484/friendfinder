// ====================DEPENDENCIES================================
var path = require("path");

// ======================ROUTING===================================

module.exports = function (app) {
  // Below code handles when users "visit" a page.
  app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  // app.post("/survey", function (req, res) {
  //   res.render("surveyquestions", {

  //   })
  // });

  app.get("/myfriend", function (req, res) {
      
    
      res.sendFile(path.join(__dirname, "../public/myfriend.html"));
     
    });

    app.post("/myfriend", function (req, res) {
      res.render("surveyquestions", {

      })
    });
    
  // If no matching route is found default to home(*)
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  
};