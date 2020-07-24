var book = require("../lib/grades").book;

exports["setUp"] = function(callback) {
	book.reset();
	callback();
};

exports["All grades are A's allthrough"] = function(test) {
	book.addGrade(100);
	book.addGrade(90);

	var result = book.checkIfAllGradesAreAs();

	test.equal(result, 'A');
	test.done();
};

exports["Average score is an A"] = function(test) {
	book.addGrade(100);
	book.addGrade(90);

	var result = book.getLetterGrade();

	test.equal(result, 'A');
	test.done();
};

exports["can add new grade"] = function(test) {
	// book._grades = [];
	book.addGrade(90);
	var count = book.getCountGrades();
	test.equal(count, 1);
	test.done();
};

exports["can average grade"] = function(test) {
	// book._grades = []; i did this as an alternative to reset though
	// unconventional
	book.addGrade(100);
	book.addGrade(50);
	var average = book.getAverage();
	test.equal(average, 75);
	test.done();
}
