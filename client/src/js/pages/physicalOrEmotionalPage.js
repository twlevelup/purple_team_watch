'use strict';

var PageView = require('../framework/page');

var physicalOrEmotionalPage = PageView.extend({

  id: 'physical-or-emotional',

  template: require('../../templates/pages/physicalOrEmotional.hbs'),

  buttonEvents: {
    right: 'tiredOption',
    left: 'angryOption'
  },

  tiredOption: function() {
    global.App.navigate('rateYourPainPage');
  },

  angryOption: function() {
    global.App.navigate('physicalOrEmotionalResultsPage');
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  }
});

module.exports = physicalOrEmotionalPage;
