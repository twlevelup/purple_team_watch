var Disease = require('../models/disease');
var Config = require('../config/config.js');

var Diseases = Backbone.Collection.extend({
  model: Disease
});

module.exports = Diseases;
