'use strict';

var Page = require('../framework/page');

var ResultsPage = Page.extend({

  id: 'results-page',

  template: require('../../templates/pages/resultsPage.hbs'),

  buttonEvents: {
    right: 'goToMenu',
    left: 'goToMenu',
    top: 'goToMenu',
    bottom: 'goToMenu',
    face: 'goToMenu'
  },

  goToMenu: function() {
    global.App.router.navigate('menu', true);
  },

  goToContacts: function() {
    global.App.navigate('contacts', true);
  },

  scrollUp: function() {
    $('#watch-face').animate({scrollTop: '-=70px'});
  },

  scrollDown: function() {
    $('#watch-face').animate({scrollTop: '+=70px'});
  },

  render: function() {
    var results = global.App.healthQuizResults.models.map(function(m) {
      return m.toJSON();
    });
    results.reverse();

    this.$el.html(this.template({
      results: results
    }));

    return this;

  }

});

module.exports = ResultsPage;
