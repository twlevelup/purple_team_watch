'use strict';

var HomePage = require('../../src/js/pages/homePage'),
  Router = require('../../src/js/router'),
  App = require('../../src/js/app'),
  QuestionPage = require('../../src/js/pages/questionPage');

global.QuestionPage = QuestionPage;

describe('The Questionaire', function() {

  var questionPage;

  beforeEach(function () {
    questionPage = new QuestionPage();
  });

  describe('button event handlers', function () {

    describe('when right button is clicked', function () {

      it('should call sadOption function', function () {
        spyOn(questionPage, 'sadOption');
        questionPage.setButtonEvents();
        questionPage.trigger('right');

        expect(questionPage.sadOption).toHaveBeenCalled();
      });

    });

    describe('when left button is clicked', function () {

      it('should call happyOption function ', function () {
        spyOn(global.App, 'navigate');
        questionPage.setButtonEvents();
        questionPage.trigger('left');

        expect(global.App.navigate).toHaveBeenCalledWith('happyResultsPage', true);
      });

    });

    // describe('displays the happy smiley when happyOption is called', function () {

    //   it('should show a :-) face and call happyOption function', function() {
    //     spyOn()
    //   })

    // });

  });

  describe('rendering', function () {

    it('should produce the correct HTML', function () {
      questionPage.render();
      expect(questionPage.el.innerHTML).toContain('<div class="question">How do you feel today?</div>');
    });

    it('returns the view object', function() {
      expect(questionPage.render()).toEqual(questionPage);
    });

  });

});
