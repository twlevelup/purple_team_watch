'use strict';

var Router = require('./framework/router.js'),
  HomePage = require('./pages/homePage'),
  ContactsPage = require('./pages/contactsPage'),
  MenuPage = require('./pages/menuPage'),
  QuestionPage = require('./pages/questionPage'),
  DiseasePage = require('./pages/diseasePage'),
  DiseaseShowPage = require('./pages/diseaseShowPage'),
  PhysicalOrEmotionalPage = require('./pages/physicalOrEmotionalPage'),
  homePage = new HomePage(),
  contactsPage = new ContactsPage(),
  menuPage = new MenuPage(),
  questionPage = new QuestionPage(),
  diseasePage = new DiseasePage(),
  diseaseShowPage = new DiseaseShowPage(),
  physicalOrEmotionalPage = new PhysicalOrEmotionalPage();

var AppRouter = Router.extend({

  routes: {
    '': 'menu',
    menu: 'menu',
    contacts: 'contacts',
    question: 'question',
    diseases: 'diseases',
    'diseases/:disease': 'showDiseasePrevention',
    'diseases/:disease/prevention': 'showDiseasePrevention',
    'diseases/:disease/treatment': 'showDiseaseTreatment',
    'diseases/:disease/symptoms': 'showDiseaseSymptoms',
    physicalOrEmotionalPage: 'physicalOrEmotionalPage'
  },

  home: function() {
    this.renderView(homePage);
  },

  menu: function() {
    this.renderView(menuPage);
  },

  contacts: function() {
    this.renderView(contactsPage);
  },

  question: function() {
    this.renderView(questionPage);
  },

  diseases: function() {
    this.renderView(diseasePage);
  },

  showDisease: function(disease, detail) {
    diseaseShowPage.model = diseasePage.diseasesCollection.findWhere({urlName: disease});
    diseaseShowPage.detail = detail;

    this.renderView(diseaseShowPage);
  },

  showDiseasePrevention: function(disease) {
    this.showDisease(disease, 'prevention');
  },

  showDiseaseSymptoms: function(disease) {
    this.showDisease(disease, 'symptoms');
  },
  
  showDiseaseTreatment: function(disease) {
    this.showDisease(disease, 'treatment');
  },

  physicalOrEmotionalPage : function () {
    this.renderView(physicalOrEmotionalPage);
  }

});

module.exports = AppRouter;
