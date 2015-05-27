'use strict';

var PageView = require('../framework/page');

var physicalOrEmotionalPage = PageView.extend({

  id: 'physical-or-emotional',

  template: require('../../templates/pages/physicalOrEmotional.hbs'),

  buttonEvents: {
    right: 'tiredOption',
    left: 'sadOption'
  },

  initialize: function() {
  },

  tiredOption: function() {
    global.App.navigate('haveTemperaturePage', true);
  },

  sadOption: function() {
    global.App.navigate('physicalOrEmotionalResultsPage', true);
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  }
});

module.exports = physicalOrEmotionalPage;
