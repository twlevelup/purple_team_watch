'use strict';

var PageView = require('../framework/page');

var physicalOrEmotionalPage = PageView.extend({

  id: 'physical-or-emotional',

  template: require('../../templates/pages/physicalOrEmotional.hbs'),

  render: function() {
    this.$el.html(this.template());
    return this;
  }
});

module.exports = physicalOrEmotionalPage;
