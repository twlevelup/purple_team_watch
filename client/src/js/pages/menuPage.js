'use strict';

var Backbone = require('backbone'),
 $ = require('jquery');

Backbone.$ = $;

var PageView = require('../framework/page');

var menuView = PageView.extend({

  id: 'menu',

  template: require('../../templates/pages/menu.hbs'),

  render: function() {

    this.$el.html(this.template());

    return this;

  }

}  
);

module.exports = menuView;