'use strict';

var DiseasePage = require('../../src/js/pages/diseasePage'),
  Router = require('../../src/js/router.js');

global.App.router = new Router();

describe('The Diseases Page', function() {

  var diseasePage, router;

  beforeEach(function () {
    router = new Router();
    diseasePage = new DiseasePage();
  });

  describe('display diseases data rendering', function () {

    beforeEach(function () {
      diseasePage.render();
    });

    it('should display the name of the first disease', function () {
      expect(diseasePage.$el.find('div.disease')[0].innerHTML).toContain(diseasePage.diseasesCollection.at(0).get('name'));
    });

    describe('clicking the right button', function(){
       it('should display a new disease name', function(){
          diseasePage.setButtonEvents();
          diseasePage.trigger('right');
          expect(diseasePage.$el.find('div.disease')[0].innerHTML).not.toContain(diseasePage.diseasesCollection.at(0).get('name'));
          });

       it('should display first disease name after the last disease name was displayed', function(){
          diseasePage.setButtonEvents();
          diseasePage.diseasesCollection.forEach(function(){
            diseasePage.trigger('right');
          });
          expect(diseasePage.$el.find('div.disease')[0].innerHTML).toContain(diseasePage.diseasesCollection.at(0).get('name'));
       });
     });

    describe('clicking the left button', function(){
       it('should display the last disease name', function(){
          diseasePage.setButtonEvents();
          diseasePage.trigger('left');
          expect(diseasePage.$el.find('div.disease')[0].innerHTML).toContain(diseasePage.diseasesCollection.last().get('name'));
          });

       it('should display first disease name after the last disease name was displayed', function(){
          diseasePage.setButtonEvents();
          diseasePage.diseasesCollection.forEach(function(){
            diseasePage.trigger('left');
          });
          expect(diseasePage.$el.find('div.disease')[0].innerHTML).toContain(diseasePage.diseasesCollection.at(0).get('name'));
       });
    });

  });

  describe('handling button events', function(){

    describe('top button clicking', function(){

      it('should call function goToMenuPage', function(){
        spyOn(diseasePage, 'goToMenuPage');
        diseasePage.setButtonEvents();
        diseasePage.trigger('top');
        expect(diseasePage.goToMenuPage).toHaveBeenCalled();
      });

    });

    describe('select button clicking', function(){

      it('should call navigate to the disease info page', function(){
        spyOn(global.App.router, 'navigate');
        diseasePage.render();
        diseasePage.setButtonEvents();
        diseasePage.trigger('face');
        expect(global.App.router.navigate.calls.argsFor(0)[0]).toContain('diseases/');

      });

    });

  });

});
