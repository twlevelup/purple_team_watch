'use strict';

var Page = require('../framework/page');

var happyResultsPage = Page.extend({

  id: 'happyResults-page',

  template: require('../../templates/pages/happyResultsPage.hbs'),

  buttonEvents: {
    right: '',
    left: '',
    top: '',
    bottom: '',
    face: ''
  },

  scrollUp: function() {
    $('#watch-face').animate({scrollTop: '-=70px'});
  },

  scrollDown: function() {
    $('#watch-face').animate({scrollTop: '+=70px'});
  },

  render: function() {

    this.$el.html(this.template());

    return this;

  }

});

module.exports = happyResultsPage;