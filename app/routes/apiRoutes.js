// =================LOAD DATA================================
// linking routes to a series of "data" sources.

var friendsData = require("../data/friends");
//let friendNames = ["Jack Napier"];
// ======================== ROUTING==========================

module.exports = function (app) {
  // API GET Requests - code handles when users "visit" a page.
  // In each of the below cases when a user visits a link

  app.get("/api/friends", function (req, res) {
    res.json(friendsData);
  });

  // API POST Requests - code handles when a user submits a form subming data to server. 

  app.post("/api/friendlist", function (req, res) {
    // Note the code here. Our "server" will respond to requests and 

    let newFriend = req.body.scores
    let buddyDiff = [];
    //console.log(friendsData);

    for (let i = 0; i < friendsData.length; i++) {


      let friend2 = friendsData[i].scores;
      let map = newFriend.map(function (x, index) {
        return Math.abs(x - friend2[index]);
      });
      //console.log(map)

      let reducer = (accumulator, currentValue) => accumulator + currentValue;

      let compatibilityScore = map.reduce(reducer);
      //console.log(compatibilityScore);
      //console.log(friendsData[i].name);

      buddyDiff.push({
        name: friendsData[i].name,
        compScore: compatibilityScore
      });
    }

    if (buddyDiff.length) {
      console.log(buddyDiff.length);
      
      let lowestCompName = buddyDiff[0].name;
      let lowestCompValue = buddyDiff[0].compScore

      for (let i = 1; i < buddyDiff.length; i++) {
        if (buddyDiff[i].compScore < lowestCompValue) {
          lowestCompName = buddyDiff[i].name;
          lowestCompValue = buddyDiff[i].compScore;
        }
      }

    console.log(lowestCompName)
    console.log(lowestCompValue)
    }
    



    // let buddy1 = friendsData[i].name;
    // let buddy2 = req.body.name;

    // console.log(`
    // ${buddy2} your new best buddy is ${buddy1}. 
    // You two have the highest compatibilty score together!
    // `);




    friendsData.push(req.body);


    // if (friendNames.indexOf(req.body.name) === 0) {
    //   //alert("Great job! We're close to finding your perfect friend!")
    //   console.log("already there");

    // } else {
    //   friendNames.push(req.body.name);
    //   console.log("Adding name")
    //  }

  });

  // app.post("/api/clear", function () {
  //   // Empty out the arrays of data
  //   friendsData = [];

  //   console.log(friendsData);
  // });

};