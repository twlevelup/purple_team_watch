'use strict';

var DiseaseView = Backbone.View.extend({

  tagName: 'div',

  template: require('../../templates/views/disease.hbs'),

  initialize: function() {
    _.bindAll(this, 'render');
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  }

});

module.exports = DiseaseView;
