'use strict';

var Page = require('../framework/page');

var happyResultsPage = Page.extend({

  id: 'happyResults-page',

  template: require('../../templates/pages/happyResultsPage.hbs'),

  buttonEvents: {
    right: 'goToMenuPage',
    left: 'goToMenuPage',
    top: 'goToMenuPage',
    bottom: 'goToMenuPage',
    face: 'goToMenuPage'
  },

  goToMenuPage: function() {
    global.App.router.navigate('menu', true);
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