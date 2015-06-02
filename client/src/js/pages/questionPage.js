'use strict';

var Backbone = require('backbone'),
 $ = require('jquery');

Backbone.$ = $;

var PageView = require('../framework/page');
var emotions = ['happy', 'sad'];

var questionView = PageView.extend({

  id: 'question',

  template: require('../../templates/pages/question.hbs'),

  buttonEvents: {
    right: 'sadOption',
    left: 'happyOption',
    bottom: 'menuOption',
    top: 'menuOption'
  },

  happyOption: function() {
    global.App.navigate('happyResultsPage', true);
  },

  sadOption: function() {
    global.App.navigate('physicalOrEmotionalPage', true);

  },

  menuOption: function() {
    global.App.navigate('menu', true);
  },



  render: function() {
    this.$el.html(this.template());
    return this;
  }
});
module.exports = questionView;
