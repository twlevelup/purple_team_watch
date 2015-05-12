'use strict';

var Router = require('./framework/router.js'),
  HomePage = require('./pages/homePage'),
  ContactsPage = require('./pages/contactsPage'),
  MenuPage = require('./pages/menuPage'),
  QuestionPage = require('./pages/questionPage'),
  homePage = new HomePage(),
  contactsPage = new ContactsPage(),
  menuPage = new MenuPage(),
  questionPage = new QuestionPage();

var AppRouter = Router.extend({

  routes: {
    '': 'home',
    menu: 'menu',
    contacts: 'contacts',
    question: 'question'
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
  }

});

module.exports = AppRouter;
