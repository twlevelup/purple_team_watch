'use strict';

var PageView = require('../framework/page');

var DiseasesCollection = require('../collections/diseases'),
  DiseaseView = require('../views/disease');

var DiseasesView = PageView.extend({

  id: 'diseases',

  template: require('../../templates/pages/diseases.hbs'),

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
    this.$el.empty();

    this.$el.html(this.template());

  },

  goToMenuPage: function() {
    global.App.router.navigate('menu', true);
  },

  seedDiseases: function() {
    this.diseasesCollection.push([
      {name: 'Pneumonia',
        symptoms: 'Ill health',
        treatment: 'Take medicine',
        prevention: 'Exercise caution'},
      {name: 'HIV/AIDS'},
      {name: 'Malaria'},
      {name: 'Diarrhoea'},
      {name: 'Tuberculosis'},
      {name: 'Measles'},
      {name: 'Whooping Cough'},
      {name: 'Depression'}
    ]);
  },

  render: function() {

    // this.$el = $('.disease');
    this.$el.empty();

    this.$el.html(this.template());

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

  // createDiseaseSymptomsHTML: function(disease) {
  //   this.currentView = new DiseaseSymptomsView({
  //     model: disease
  //   });
  //   this.currentView.render().el;
  // }

}
);

module.exports = DiseasesView;

  // screenClickExample: function() {
  //   this.$el.html('<div>Oh noes!</div>');
  // },

  // ,

  // createContactHTML: function(contact) {
  //     var view = new ContactView({
  //       model: contact
  //     });
  //     return view.render().el;
  //   }

  // seedContacts: function() {
  //   this.contactsCollection.push([
  //     {name: 'Adam', phoneNumber: '0431 111 111'},
  //     {name: 'James', phoneNumber: '0431 222 222'},
  //     {name: 'Marzena', phoneNumber: '0431 333 333'}
  //   ]);
  // },
