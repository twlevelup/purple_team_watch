'use strict';

var AppRouter = require('../src/js/router.js'),
  PageView = require('../src/js/framework/page'),
  HomePage = require('../src/js/pages/homePage'),
  ContactPage = require('../src/js/pages/contactsPage'),
  Results = require('../src/js/pages/resultsPage'),
  PhysicalOrEmotional = require('../src/js/pages/physicalOrEmotionalPage');

describe('Application Router', function() {

  var router;

  describe('The Routes', function() {

    beforeEach(function() {
      router = new AppRouter();
      spyOn(router, 'renderView');
    });

    describe('#home', function() {
      it('should load the home screen', function() {
        router.home();
        var isHomePage = router.renderView.calls.argsFor(0)[0] instanceof HomePage;
        expect(isHomePage).toBeTruthy();
      });
    });

    describe('#contacts', function() {
      it('should load the contacts screen', function() {
        router.contacts();
        var isContactPage = router.renderView.calls.argsFor(0)[0] instanceof ContactPage;
        expect(isContactPage).toBeTruthy();
      });
    });

    describe('#physicalOrEmotional', function() {
      it('should load the physical or emotional screen', function() {
        router.physicalOrEmotionalPage();
        var isPhysicalOrEmotionalPage = router.renderView.calls.argsFor(0)[0] instanceof PhysicalOrEmotional;
        expect(isPhysicalOrEmotionalPage).toBeTruthy();
      });
    });

    describe('#results', function() {
      it('should load the results page', function() {
        router.results();
        var isResults = router.renderView.calls.argsFor(0)[0] instanceof Results;
        expect(isResults).toBeTruthy();
      });
    });

  });

});
