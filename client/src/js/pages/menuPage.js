'use strict';

var Backbone = require('backbone'),
 $ = require('jquery');

Backbone.$ = $;

var PageView = require('../framework/page');

var menuView = PageView.extend({

  id: 'menu',

  template: require('../../templates/pages/menu.hbs'),

  buttonEvents: {
    top: 'goToFeature1',
    right: 'goToResults',
    bottom: 'goToFeature3',
    left: 'goToFeature4'
  },

  goToFeature1: function() {
    global.App.navigate('question', true);
  },

  goToResults: function() {
      global.App.navigate('results', true);
    },

  goToFeature3: function() {
    global.App.navigate('diseases', true);
  },

  goToFeature4: function() {
    //to be implemented
    // console.log('amy clicked');
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  }

});

module.exports = menuView;
