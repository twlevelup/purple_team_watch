'use strict';

var Page = require('../framework/page');

var ResultsPage = Page.extend({

  id: 'results-page',

  template: require('../../templates/pages/resultsPage.hbs'),

  buttonEvents: {
    right: '',
    left: '',
    top: '',
    bottom: '',
    face: ''
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

    this.$el.html(this.template({
      results: results
    }));

    return this;

  }

});

module.exports = ResultsPage;
