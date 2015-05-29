'use strict';

var Page = require('../framework/page');

var haveTemperatureResultsPage = Page.extend({

  id: 'haveTemperatureResults-page',

  templateSeeDoctor: require('../../templates/pages/haveTemperatureResultsDoctorPage.hbs'),
  templateMonitorCondition: require('../../templates/pages/haveTemperatureResultsMonitorPage.hbs'),
  templateRest: require('../../templates/pages/haveTemperatureResultsRestPage.hbs'),

  buttonEvents: {
    right: 'goToMenuPage',
    left: 'goToMenuPage',
    top: 'goToMenuPage',
    bottom: 'goToHaveTemperaturePage',
    face: 'goToMenuPage'
  },

  goToMenuPage: function() {
    global.App.navigate('menu', true);
  },

  goToHaveTemperaturePage: function() {
    global.App.navigate('haveTemperaturePage', true);
  },

  scrollUp: function() {
    $('#watch-face').animate({scrollTop: '-=70px'});
  },

  scrollDown: function() {
    $('#watch-face').animate({scrollTop: '+=70px'});
  },

  render: function() {

    var adviceOption = _.findWhere(this.adviceOptions, {temperature: global.App.temperature, pain: global.App.pain});

    global.App.healthQuizResults.push({answer: adviceOption.answer});
    this.$el.html(this[adviceOption.template]());
    return this;

  },

  adviceOptions: [
    {
      temperature: 'yes',
      pain: 'high',
      template: 'templateSeeDoctor',
      answer: 'go to doctor'
    },
    {
      temperature: 'yes',
      pain: 'low',
      template: 'templateMonitorCondition',
      answer: 'monitor condition'
    },
    {
      temperature: 'no',
      pain: 'high',
      template: 'templateMonitorCondition',
      answer: 'monitor condition'
    },
    {
      temperature: 'no',
      pain: 'low',
      template: 'templateRest',
      answer: 'rest'
    }
  ]

});

module.exports = haveTemperatureResultsPage;
