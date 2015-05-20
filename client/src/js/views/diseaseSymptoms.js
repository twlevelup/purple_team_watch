'use strict';

var DiseaseSymptomsView = Backbone.View.extend({

  tagName: 'div class="disease"',

  template: require('../../templates/views/diseaseSymptoms.hbs'),

  initialize: function() {
    _.bindAll(this, 'render');
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  }

});

module.exports = DiseaseSymptomsView;
