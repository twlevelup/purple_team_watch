'use strict';

var Backbone = require('backbone'),
 $ = require('jquery');

Backbone.$ = $;

var PageView = require('../framework/page');

var snakeView = PageView.extend({

  id: 'snake',

  template: require('../../templates/pages/snake.hbs'),

  buttonEvents: {
    top: 'goToMenu',
  },

  goToMenu: function() {
    global.App.router.navigate('menu', true);
  },

  render: function() {


    console.log('snake render called');

    this.$el.empty();
    // var snakeHTML = document.createDocumentFragment();
    // $(snakeHTML).append(this.createSnakeHTML(snake));
    this.$el.append(this.template());

    this.$el.html(this.template());
    return this;

  }

});

module.exports = snakeView;
