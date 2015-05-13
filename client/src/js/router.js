'use strict';

var Router = require('./framework/router.js'),
  HomePage = require('./pages/homePage'),
  ContactsPage = require('./pages/contactsPage'),
  MenuPage = require('./pages/menuPage'),
  QuestionPage = require('./pages/questionPage'),
  PhysicalOrEmotional = require('./pages/physicalOrEmotionalPage'),
  homePage = new HomePage(),
  contactsPage = new ContactsPage(),
  menuPage = new MenuPage(),
  questionPage = new QuestionPage(),
  physicalOrEmotional = new PhysicalOrEmotional();

var AppRouter = Router.extend({

  routes: {
    '': 'home',
    menu: 'menu',
    contacts: 'contacts',
    question: 'question',
    physicalOrEmotional: 'physicalOrEmotional'
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

  physicalOrEmotional: function () {
    this.renderView(physicalOrEmotional);
  }


});

module.exports = AppRouter;
