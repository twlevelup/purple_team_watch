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
  },

  goToMenuPage: function() {
    global.App.router.navigate('menu', true);
  },

  seedDiseases: function() {
    this.diseasesCollection.push([
      {name: 'Pneumonia'},
      {name: 'HIV/AIDS'},
      {name: 'Malaria'}
    ]);
  },

  render: function() {

    // this.$el = $('.disease');

    this.$el.html(this.template());

    var diseasesHTML = document.createDocumentFragment();

    this.diseasesCollection.each(function(disease) {
      $(diseasesHTML).append(this.createDiseaseHTML(disease));
    }, this);

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
