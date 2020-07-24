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

  checkIfAllGradesAreAs: function() {
    var total = this._grades.reduce(function(accumulator, currentValue) {
      return accumulator + currentValue;
    });
    var averageScore = total / this._grades.length;
    const qualifies = this._grades.every(function(currentValue) {
      return currentValue >= 90;
    });
    if (qualifies) {
      return "A";
    } else {
      return "F";
    }
  },

  getLetterGrade: function() {
    var average = this.getAverage();
    if( average >= 90 ) {
      return 'A';
    } else if ( average >= 80 ) {
      return 'B';
    } else if ( average >= 70 ) {
      return 'C';
    } else if ( average >= 60 ) {
      return 'D';
    }
    return 'F';
  },

  reset: function() {
    this._grades = [];
  }

};

exports.book = gradeBook;
