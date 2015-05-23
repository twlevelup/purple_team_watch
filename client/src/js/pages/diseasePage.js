'use strict';

var PageView = require('../framework/page');

var DiseasesCollection = require('../collections/diseases'),
  DiseaseView = require('../views/disease');

var DiseasesView = PageView.extend({

  id: 'diseases',

  buttonEvents: {
    top: 'goToMenuPage',
    left: 'left',
    right: 'right',
    bottom: 'back',
    face: 'select'
  },

  initialize: function() {
    var self = this;
    this.diseasesCollection = new DiseasesCollection();
    this.listenTo(this.diseasesCollection, 'change', this.render);

    self.seedDiseases();

    this.currentDisease = this.diseasesCollection.at(0);

    this.render();
  },

  right: function() {
    var index = this.diseasesCollection.indexOf(this.currentDisease);
    if (index === this.diseasesCollection.indexOf(this.diseasesCollection.last())) {
      index = 0;
    } else {
      index += 1;
    }

    this.currentDisease = this.diseasesCollection.at(index);

    this.render();
  },

  left: function() {
    var index = this.diseasesCollection.indexOf(this.currentDisease);
    if (index === 0) {
      index = this.diseasesCollection.indexOf(this.diseasesCollection.last());
    } else {
      index -= 1;
    }

    this.currentDisease = this.diseasesCollection.at(index);

    this.render();
  },

  select: function() {
    global.App.router.navigate('diseases/' + this.currentDisease.get('urlName'), true);
  },

  goToMenuPage: function() {
    global.App.router.navigate('menu', true);
  },

  seedDiseases: function() {
    this.diseasesCollection.push([
      {
        name: 'Pneumonia',
        urlName: 'pneumonia',
        symptoms: 'Ill health',
        treatment: 'Take medicine',
        prevention: 'Exercise caution'
      },
      {
        name: 'HIV/AIDS',
        urlName: 'aids',
        symptoms: 'Ill health',
        treatment: 'Take medicine',
        prevention: 'Exercise caution'
      },
      {
        name: 'Malaria',
        urlName: 'malaria',
        symptoms: 'Ill health',
        treatment: 'Take medicine',
        prevention: 'Exercise caution'
      },
      {
        name: 'Diarrhoea',
        urlName: 'diarrhoea',
        symptoms: 'Ill health',
        treatment: 'Take medicine',
        prevention: 'Exercise caution'
      },
      {
        name: 'Tuberculosis',
        urlName: 'tuberculosis',
        symptoms: 'Ill health',
        treatment: 'Take medicine',
        prevention: 'Exercise caution'
      },
      {
        name: 'Measles',
        urlName: 'measles',
        symptoms: 'Ill health',
        treatment: 'Take medicine',
        prevention: 'Exercise caution'
      },
      {
        name: 'Whooping Cough',
        urlName: 'whooping-cough',
        symptoms: 'Ill health',
        treatment: 'Take medicine',
        prevention: 'Exercise caution'
      },
      {
        name: 'Depression',
        urlName: 'depression',
        symptoms: 'Ill health',
        treatment: 'Take medicine',
        prevention: 'Exercise caution'
      }
    ]);
  },

  render: function() {

    this.$el.empty();

    var diseasesHTML = document.createDocumentFragment();
    $(diseasesHTML).append(this.createDiseaseHTML(this.currentDisease));

    this.$el.append(diseasesHTML);

    return this;
  },

  createDiseaseHTML: function(disease) {
    var view = new DiseaseView({
      model: disease
    });
    return view.render().el;
  }

}
);

module.exports = DiseasesView;
