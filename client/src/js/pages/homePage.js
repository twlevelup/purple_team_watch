'use strict';

var PageView = require('../framework/page');

var homeScreen = PageView.extend({

  id: 'home',

  template: require('../../templates/pages/home.hbs'),

  buttonEvents: {
    right: 'goToContacts',
    top: 'scrollUp',
    bottom: 'scrollDown'
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

  displayTime: function() {

    var currentTime = '';
    var self = this;
    setInterval(function() {
      var currentDate = Date();
      var hours = currentDate.getHours();
      var minutes = currentDate.getMinutes();
      var colon = ':';
      var ampm = '';
      if (parseInt(hours) > 12) {
        hours = (parseInt(hours) - 12).toString();
        ampm = 'pm';
      } else {
        ampm = 'am';
      }

      currentTime = hours.concat(colon).concat(minutes).concat(ampm);

      self.$('.time').text(currentTime);
    }, 1000);

  },

  render: function() {

    this.$el.html(this.template());

    //this.displayTime();
    // Looking to print time string in the format HH:MMam/pm

    return this;

  }

});

module.exports = homeScreen;
