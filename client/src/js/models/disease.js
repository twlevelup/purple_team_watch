var Disease = Backbone.Model.extend({
  defaults: {
    type: 'Common',
    name: 'Pneumonia',
    symptoms: 'Ill health',
    treatment: 'Take medicine',
    prevention: 'Exercise caution'
  }
});

module.exports = Disease;
