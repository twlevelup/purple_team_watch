'use strict';

var AppRouter = require('../src/js/router.js'),
  PageView = require('../src/js/framework/page'),
  HomePage = require('../src/js/pages/homePage'),
  ContactPage = require('../src/js/pages/contactsPage'),
  ResultsPage = require('../src/js/pages/resultsPage'),
  PhysicalOrEmotionalPage = require('../src/js/pages/physicalOrEmotionalPage'),
  PhysicalOrEmotionalResultsPage = require('../src/js/pages/physicalOrEmotionalResultsPage'),
  HaveTemperaturePage = require('../src/js/pages/haveTemperaturePage'),
  HaveTemperatureResultsPage = require('../src/js/pages/haveTemperatureResultsPage'),
  RateYourPainPage = require('../src/js/pages/rateYourPainPage');

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
        var isPhysicalOrEmotionalPage = router.renderView.calls.argsFor(0)[0] instanceof PhysicalOrEmotionalPage;
        expect(isPhysicalOrEmotionalPage).toBeTruthy();
      });
    });

    describe('#results', function() {
      it('should load the results page', function() {
        router.results();
        var isResults = router.renderView.calls.argsFor(0)[0] instanceof ResultsPage;
        expect(isResults).toBeTruthy();
      });
    });

    describe('#physicalOrEmotionalResultsPage', function() {
      it('should load the physical or emotional results screen', function() {
        router.physicalOrEmotionalResultsPage();
        var isPhysicalOrEmotionalResultsPage = router.renderView.calls.argsFor(0)[0] instanceof PhysicalOrEmotionalResultsPage;
        expect(isPhysicalOrEmotionalResultsPage).toBeTruthy();
      });
    });

    describe('#HaveTemperaturePage', function() {
      it('should load the have temperature screen', function() {
        router.haveTemperaturePage();
        var isHaveTemperaturePage = router.renderView.calls.argsFor(0)[0] instanceof HaveTemperaturePage;
        expect(isHaveTemperaturePage).toBeTruthy();
      });
    });

    describe('#RateYourPainPage', function() {
      it('should load the have rate your pain screen', function() {
        router.rateYourPainPage();
        var isRateYourPainPage = router.renderView.calls.argsFor(0)[0] instanceof RateYourPainPage;
        expect(isRateYourPainPage).toBeTruthy();
      });
    });

    describe('#HaveTemperatureResultsPage', function() {
      it('should load the have temperature results screen', function() {
        router.haveTemperatureResultsPage();
        var isHaveTemperatureResultsPage = router.renderView.calls.argsFor(0)[0] instanceof HaveTemperatureResultsPage;
        expect(isHaveTemperatureResultsPage).toBeTruthy();
      });
    });

  });

});
