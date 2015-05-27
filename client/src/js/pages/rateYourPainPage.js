'use strict';

var Page = require('../framework/page');

var RateYourPainPage = Page.extend({

  id: 'rate-your-pain-page',

  template: require('../../templates/pages/rateYourPainPage.hbs'),

  buttonEvents: {
    right: 'highOption',
    left: 'lowOption',
    top: '',
    bottom: '',
    face: ''
  },

  lowOption: function() {
    global.App.pain = 'low';
    global.App.navigate('haveTemperaturePage');
  },

  highOption: function() {
    global.App.pain = 'high';
    global.App.navigate('haveTemperaturePage');
  },

  render: function() {

    this.$el.html(this.template());

    return this;

  }

});

module.exports = RateYourPainPage;
