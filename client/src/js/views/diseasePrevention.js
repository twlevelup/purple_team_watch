'use strict';

var DiseasePreventionView = Backbone.View.extend({

  tagName: 'div',
  className: 'disease',

  template: require('../../templates/views/diseasePrevention.hbs'),

  initialize: function() {
    _.bindAll(this, 'render');
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  }

});

module.exports = DiseasePreventionView;
