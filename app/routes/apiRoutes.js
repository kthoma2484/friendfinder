// =================LOAD DATA================================
// linking routes to a series of "data" sources.

var friendsData = require("../app/data/friends");


// ======================== ROUTING==========================

module.exports = function(app) {
  // API GET Requests - code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  
  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  // API POST Requests - code handles when a user submits a form subming data to server. 

  app.post("/api/friends", function(req, res) {
    // Note the code here. Our "server" will respond to requests and 
    friendsData.push(req.body);
  });
};
