'use strict';

var Router = require('./framework/router.js'),
  HomePage = require('./pages/homePage'),
  ContactsPage = require('./pages/contactsPage'),
  MenuPage = require('./pages/menuPage'),
  QuestionPage = require('./pages/questionPage'),
  DiseasePage = require('./pages/diseasePage'),
  homePage = new HomePage(),
  contactsPage = new ContactsPage(),
  menuPage = new MenuPage(),
  questionPage = new QuestionPage(),
  diseasePage = new DiseasePage();

var AppRouter = Router.extend({

  routes: {
    '': 'home',
    menu: 'menu',
    contacts: 'contacts',
    question: 'question',
    disease: 'disease'
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

  disease: function() {
    this.renderView(diseasePage);
  }

});

module.exports = AppRouter;
