'use strict';

var PageView = require('../framework/page');

var DiseasesCollection = require('../collections/diseases');

var DiseasesShowView = PageView.extend({

  id: 'diseases',

  preventionTemplate: require('../../templates/views/diseasePrevention.hbs'),
  symptomsTemplate: require('../../templates/views/diseaseSymptoms.hbs'),
  treatmentTemplate: require('../../templates/views/diseaseTreatment.hbs'),

  buttonEvents: {
    top: 'goToMenuPage',
    left: 'left',
    right: 'right',
    bottom: 'back'
  },

  right: function() {
    global.App.router.navigate('diseases/' + this.model.get('urlName') + '/' + this.nextDetail(), true);
  },

  left: function() {
    global.App.router.navigate('diseases/' + this.model.get('urlName') + '/' + this.previousDetail(), true);
  },

  back: function() {
    global.App.router.navigate('diseases', true);
  },

  goToMenuPage: function() {
    global.App.router.navigate('menu', true);
  },

  nextDetail: function() {
    if (this.detail === 'prevention') {
      return 'symptoms';
    } else if (this.detail === 'symptoms') {
      return 'treatment'
    } else if (this.detail === 'treatment') {
      return 'prevention'
    }
  },

  previousDetail: function() {
    if (this.detail === 'prevention') {
      return 'treatment';
    } else if (this.detail === 'symptoms') {
      return 'prevention'
    } else if (this.detail === 'treatment') {
      return 'symptoms'
    }
  },

  render: function() {
    this.$el.empty();

    this.$el.prepend('<div class="feature-title">Health Facts</div>');

    if (this.detail === 'prevention') {
      this.$el.append(this.preventionTemplate(this.model.attributes));
    } else if (this.detail === 'symptoms') {
      this.$el.append(this.symptomsTemplate(this.model.attributes));
    } else if (this.detail === 'treatment') {
      this.$el.append(this.treatmentTemplate(this.model.attributes));
    }

    return this;
  }
}
);

module.exports = DiseasesShowView;

