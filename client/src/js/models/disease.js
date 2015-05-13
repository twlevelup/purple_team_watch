var Disease = Backbone.Model.extend({
  defaults: {
    type: 'Common',
    name: 'Pneumonia',
    symptoms: 'Bad',
    treatment: 'Null',
    prevention: 'Dont pair with Marcus'
  }
});

module.exports = Disease;
