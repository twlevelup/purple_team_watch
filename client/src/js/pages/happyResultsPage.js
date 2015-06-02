'use strict';

var Page = require('../framework/page');

var happyResultsPage = Page.extend({

  id: 'happyResults-page',

  template: require('../../templates/pages/happyResultsPage.hbs'),

  buttonEvents: {
    right: 'goToMenuPage',
    left: 'goToMenuPage',
    top: 'goToMenuPage',
    bottom: 'back',
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

  back: function(){
    global.App.router.navigate('question', true);

  },
  render: function() {
    global.App.healthQuizResults.add({answer: 'good vibes'});
    this.$el.html(this.template());

    return this;

  }

});

module.exports = happyResultsPage;