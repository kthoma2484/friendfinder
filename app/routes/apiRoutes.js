// =================LOAD DATA================================
// linking routes to a series of "data" sources.

var friendsData = require("../data/friends");
//let friendNames = ["Jack Napier"];

// ======================== ROUTING==========================

module.exports = function(app) {
  // API GET Requests - code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  
  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  // API POST Requests - code handles when a user submits a form subming data to server. 

  app.post("/api/friendlist", function(req, res) {
    // Note the code here. Our "server" will respond to requests and 

    let newFriend = req.body.scores
    let buddyDiff = [];

    for (let i=0; i < friendsData.length; i++) {
      let friend2 = friendsData[i].scores;
      let map = newFriend.map(function(x, index) {
        return Math.abs(x - friend2[index])
      });
      console.log(map)

      let reducer = (accumulator, currentValue) => accumulator + currentValue;

      let compatibilityScore = map.reduce(reducer)
      console.log(compatibilityScore);

      buddyDiff.push(compatibilityScore);

      if (compatibilityScore === Math.min.apply(null,buddyDiff)) {
        console.log(friendsData[i].name);
      } else {
        return null
      }
    }

    friendsData.push(req.body);


    // if (friendNames.indexOf(req.body.name) === 0) {
    //   //alert("Great job! We're close to finding your perfect friend!")
    //   console.log("already there");

    // } else {
    //   friendNames.push(req.body.name);
    //   console.log("Adding name")
    //  }

  });

  app.post("/api/clear", function() {
    // Empty out the arrays of data
    friendsData = [];

    console.log(friendsData);
  });

};
