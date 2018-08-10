// ====================DEPENDENCIES================================
var path = require("path");
var express = require("express");

var app = express();


// ==================Utils=======================================

let mySurveyQuestion = [
    {
      questionNum: "question-one",
      questionLabel: "Question 1",
      questionText: "You would rather travel once a year than buy an expense name brand accessory.",
    },
    {
      questionNum: "question-two",
      questionLabel: "Question 2",
      questionText: "Your perfect lazy afternoon involves a good book/movie, your favorite drink, and repeat.",
    },
    {
      questionNum: "question-three",
      questionLabel: "Question 3",
      questionText: "You prefer action/scifi movies over drama/romance movies.",
    },
    {
      questionNum: "question-four",
      questionLabel: "Question 4",
      questionText: "Skydiving is definitely on your bucket list.",
    },
    {
      questionNum: "question-five",
      questionLabel: "Question 5",
      questionText: "You prefer motorcycles over cars.",
    },
    {
      questionNum: "question-six",
      questionLabel: "Question 6",
      questionText: "You would rather prepare a meal together with your partner than go out to have one prepared for you both.",
    },
    {
      questionNum: "question-seven",
      questionLabel: "Question 7",
      questionText: "A great beach day is napping, reading, and laying out under the umbrella rather than playing volleyball frisby or other sport-like activity.",
    },
    {
      questionNum: "question-eight",
      questionLabel: "Question 8",
      questionText: "Hiking is more appealing then having a beer and watching a game at the sports bar.",
    },
    {
      questionNum: "question-nine",
      questionLabel: "Question 9",
      questionText: "In terms of religion, you think everyone has the right believe (or not beleive) in what every they choose.",
    },
    {
      questionNum: "question-ten",
      questionLabel: "Question 10",
      questionText: "You're willing to try anything once as long as it's not too extreme - like swimming in a cage full of sharks.",
    }
  ];

// ======================ROUTING===================================

module.exports = function(app) {
    // HTML GET Requests for users 'visiting' a page.
    // Below code handles when users "visit" a page.
  
    // If no matching route is found default to home(*)
  
    app.get("/survey", function(req, res) {
      res.render("surveyquestions", {
              mySurveyQuestion: mySurveyQuestion
            })   
      
      res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    app.get("*", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/home.html"));
    });
  };