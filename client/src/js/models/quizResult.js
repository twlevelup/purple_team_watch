var QuizResult = Backbone.Model.extend({

  defaults: {
  	name: "Default",
  },

  getCurrentDate: function() {
  	var currentDate = new Date();

	var year = currentDate.getFullYear(),
	    month = currentDate.getMonth(),
	    d = currentDate.getDate();

	var formattedDate =  d + "-" + (month + 1) + "-" + year;

	return formattedDate;
  },

	initialize: function(){
	    this.set('date', this.getCurrentDate());
	}

});

module.exports = QuizResult;