'use strict';

var Page = require('../framework/page');

var haveTemperaturePage = Page.extend({

  id: 'haveTemperature-page',

  template: require('../../templates/pages/haveTemperaturePage.hbs'),

  buttonEvents: {
    right: 'handleNoTemperature',
    left: 'handleHighTemperature',
    bottom: 'goToRateYourPainPage',
    top: 'goToMenuPage'
  },

  goToMenuPage: function() {
    global.App.navigate('menu', true);
  },

  handleHighTemperature: function(){
    global.App.temperature = 'yes';
    this.goToHaveTemperatureResultsPage();
  },

  handleNoTemperature: function(){
    global.App.temperature = 'no';
    this.goToHaveTemperatureResultsPage();
  },

  goToHaveTemperatureResultsPage: function() {
    global.App.navigate('haveTemperatureResultsPage', true);
  },

  goToRateYourPainPage: function(){
    global.App.navigate('rateYourPainPage', true);
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

module.exports = haveTemperaturePage;
