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
    right: 'happyOption',

    //name:function
    left: 'sadOption'
  },

  happyOption: function() {
    this.$el.html('<div><p>:-)</p></div>');

  },

  sadOption: function() {
    this.$el.html('<div><p>:-(</p></div>');
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  }
});
module.exports = questionView;
