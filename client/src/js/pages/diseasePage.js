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
    bottom: 'goToMenuPage',
    face: 'select'
  },

  initialize: function() {
    var self = this;

    this.diseasesCollection = new DiseasesCollection();

    this.listenTo(this.diseasesCollection, 'change', this.render);

    self.seedDiseases();

    this.currentDisease = this.diseasesCollection.at(0);
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
        symptoms: 'Symptoms may include: breathing difficulties, fever, general malaise, loss of appetite, abdominal pain, headache, chest pain, cough, blue colouration of skin around the mouth.',
        treatment: 'Possbile treatment may include: hospital admission, plenty of fluids, antibiotics, medications, rest – sitting up is better than lying down.',
        prevention: 'Prevention measures includes: vacination, practicing good hygiene, not smoking, keeping immune system strong by getting enough sleep, regular exercise, and maintaining a healthy diet.'
      },
      {
        name: 'HIV/AIDS',
        urlName: 'aids',
        symptoms: 'Ill health',
        treatment: 'Take medicine',
        prevention: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc urna est, fringilla a dictum quis, commodo ac erat. Mauris eget efficitur nulla. Donec eget sem et sapien sagittis vestibulum. Quisque in turpis a lorem congue faucibus.'
      },
      {
        name: 'Malaria',
        urlName: 'malaria',
        symptoms: 'Ill health',
        treatment: 'Take medicine',
        prevention: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc urna est, fringilla a dictum quis, commodo ac erat. Mauris eget efficitur nulla. Donec eget sem et sapien sagittis vestibulum. Quisque in turpis a lorem congue faucibus.'
      },
      {
        name: 'Diarrhoea',
        urlName: 'diarrhoea',
        symptoms: 'Ill health',
        treatment: 'Take medicine',
        prevention: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc urna est, fringilla a dictum quis, commodo ac erat. Mauris eget efficitur nulla. Donec eget sem et sapien sagittis vestibulum. Quisque in turpis a lorem congue faucibus.'
      },
      {
        name: 'Tuberculosis',
        urlName: 'tuberculosis',
        symptoms: 'Ill health',
        treatment: 'Take medicine',
        prevention: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc urna est, fringilla a dictum quis, commodo ac erat. Mauris eget efficitur nulla. Donec eget sem et sapien sagittis vestibulum. Quisque in turpis a lorem congue faucibus.'
      },
      {
        name: 'Measles',
        urlName: 'measles',
        symptoms: 'Ill health',
        treatment: 'Take medicine',
        prevention: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc urna est, fringilla a dictum quis, commodo ac erat. Mauris eget efficitur nulla. Donec eget sem et sapien sagittis vestibulum. Quisque in turpis a lorem congue faucibus.'
      },
      {
        name: 'Whooping Cough',
        urlName: 'whooping-cough',
        symptoms: 'Ill health',
        treatment: 'Take medicine',
        prevention: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc urna est, fringilla a dictum quis, commodo ac erat. Mauris eget efficitur nulla. Donec eget sem et sapien sagittis vestibulum. Quisque in turpis a lorem congue faucibus.'
      },
      {
        name: 'Depression',
        urlName: 'depression',
        symptoms: 'Ill health',
        treatment: 'Take medicine',
        prevention: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc urna est, fringilla a dictum quis, commodo ac erat. Mauris eget efficitur nulla. Donec eget sem et sapien sagittis vestibulum. Quisque in turpis a lorem congue faucibus.'
      }
    ]);
  },

  render: function() {
    this.$el.empty();

    var diseasesHTML = document.createDocumentFragment();
    $(diseasesHTML).append(this.createDiseaseHTML(this.currentDisease));

    this.$el.append(diseasesHTML).prepend('<div class="feature-title">Health Facts</div>');

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
