'use strict';

var Router = require('./framework/router.js'),
  HomePage = require('./pages/homePage'),
  ContactsPage = require('./pages/contactsPage'),
  MenuPage = require('./pages/menuPage'),
  QuestionPage = require('./pages/questionPage'),
  DiseasePage = require('./pages/diseasePage'),
  DiseaseShowPage = require('./pages/diseaseShowPage'),
  PhysicalOrEmotionalPage = require('./pages/physicalOrEmotionalPage'),
  ResultsPage = require('./pages/resultsPage'),
  PhysicalOrEmotionalResultsPage = require('./pages/physicalOrEmotionalResultsPage'),
  HaveTemperaturePage = require('./pages/haveTemperaturePage'),
  HaveTemperatureResultsPage = require('./pages/haveTemperatureResultsPage'),
  RateYourPainPage = require('./pages/rateYourPainPage'),
  homePage = new HomePage(),
  resultsPage = new ResultsPage(),
  contactsPage = new ContactsPage(),
  menuPage = new MenuPage(),
  questionPage = new QuestionPage(),
  diseasePage = new DiseasePage(),
  diseaseShowPage = new DiseaseShowPage(),
  physicalOrEmotionalPage = new PhysicalOrEmotionalPage(),
  physicalOrEmotionalResultsPage = new PhysicalOrEmotionalResultsPage(),
  haveTemperaturePage = new HaveTemperaturePage(),
  haveTemperatureResultsPage = new HaveTemperatureResultsPage(),
  rateYourPainPage = new RateYourPainPage();

var AppRouter = Router.extend({

  routes: {
    '': 'menu',
    menu: 'menu',
    contacts: 'contacts',
    question: 'question',
    results: 'results',
    diseases: 'diseases',
    'diseases/:disease': 'showDiseasePrevention',
    'diseases/:disease/prevention': 'showDiseasePrevention',
    'diseases/:disease/treatment': 'showDiseaseTreatment',
    'diseases/:disease/symptoms': 'showDiseaseSymptoms',
    physicalOrEmotionalPage: 'physicalOrEmotionalPage',
    physicalOrEmotionalResultsPage: 'physicalOrEmotionalResultsPage',
    haveTemperaturePage: 'haveTemperaturePage',
    rateYourPainPage: 'rateYourPainPage',
    haveTemperatureResultsPage: 'haveTemperatureResultsPage'
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

  results: function() {
    this.renderView(resultsPage);

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
  },

  physicalOrEmotionalResultsPage : function () {
    this.renderView(physicalOrEmotionalResultsPage);
  },

  haveTemperaturePage : function () {
    this.renderView(haveTemperaturePage);
  },

  rateYourPainPage: function () {
    this.renderView(rateYourPainPage);
  },

  haveTemperatureResultsPage : function () {
    this.renderView(haveTemperatureResultsPage);
  }

});

module.exports = AppRouter;
