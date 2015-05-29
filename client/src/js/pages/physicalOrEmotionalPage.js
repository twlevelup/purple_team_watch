'use strict';

var PageView = require('../framework/page');

var physicalOrEmotionalPage = PageView.extend({

  id: 'physical-or-emotional',

  template: require('../../templates/pages/physicalOrEmotional.hbs'),

  buttonEvents: {
    right: 'tiredOption',
    left: 'angryOption',
    bottom: 'prevOption'
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

  render: function() {
    this.$el.html(this.template());
    return this;
  }
});

module.exports = physicalOrEmotionalPage;
