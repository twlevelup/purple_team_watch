'use strict';

var Page = require('../framework/page');
var QuizResult = require('../models/quizResult');

var physicalOrEmotionalResultsPage = Page.extend({

  id: 'physicalOrEmotionalResults-page',

  template: require('../../templates/pages/physicalOrEmotionalResultsPage.hbs'),

  buttonEvents: {
    right: 'homeOption',
    left: 'homeOption',
    top: 'homeOption',
    bottom: 'backOption',
    face: 'homeOption'
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

  homeOption: function() {
    global.App.navigate('menu');
  },

  backOption: function() {
    global.App.navigate('physicalOrEmotionalPage');
  },

  render: function() {
    global.App.healthQuizResults.add({answer: 'chill out'});

    this.$el.html(this.template());

    return this;
  },

});

module.exports = physicalOrEmotionalResultsPage;
