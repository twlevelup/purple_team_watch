'use strict';

var PageView = require('../framework/page');

var physicalOrEmotionalPage = PageView.extend({

  id: 'physical-or-emotional',

  template: require('../../templates/pages/physicalOrEmotional.hbs'),

  buttonEvents: {
    right: 'tiredOption',
    left: 'angryOption',
    bottom: 'prevOption',
    top: 'menuOption'
  },

  initialize: function() {
  },

  tiredOption: function() {
    global.App.navigate('rateYourPainPage', true);
  },

  angryOption: function() {
    global.App.navigate('physicalOrEmotionalResultsPage');
  },

  prevOption: function(){
    global.App.navigate('question', true);
  },

  menuOption: function() {
    global.App.navigate('menu', true);
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  }
});

module.exports = physicalOrEmotionalPage;
