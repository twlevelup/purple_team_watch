var QuizResult = require('../models/quizResult.js');
var Config = require('../config/config.js');

var QuizResults = Backbone.Collection.extend({
  model: QuizResult
});

module.exports = QuizResults;
