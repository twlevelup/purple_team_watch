var Disease = require('../models/disease');
var Config = require('../config/config.js');

var Diseases = Backbone.Firebase.Collection.extend({
  model: Disease,
  url: Config.firebaseUrl + '/Diseases'
});

module.exports = Diseases;
