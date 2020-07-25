var book = require("./lib/grades").book;

var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello, World!');
});

app.get('/grades', function(req, res) {
  var grades = req.query.grade.split(',');
  for(var i = 0; i < grades.length; i += 1) {
    book.addGrade(parseInt(grades[i]));
  };
  var average = book.getAverage();
  var grade = book.getLetterGrade();
  res.end('Your average grade is ' + average + '. That\'s an/a ' + grade);
});

app.listen(3000);
console.log('Server is setup...');
