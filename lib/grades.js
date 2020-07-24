var gradeBook = {

  _grades: [],

  addGrade: function(newGrade) {
    this._grades.push(newGrade)
  },

  getCountGrades: function() {
    return this._grades.length;
  },

  getAverage: function() {
    var total = this._grades.reduce(function(accumulator, currentValue) {
      return accumulator + currentValue;
    });
    return total / this._grades.length;
  },

  reset: function() {
    this._grades = [];
  }

};

exports.book = gradeBook;
