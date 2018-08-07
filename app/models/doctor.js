import DS from 'ember-data'

export default DS.Model.extend({
  user: DS.belongsTo('user'),
  name: DS.attr('string'),
  specialty: DS.attr('string'),
  hospital: DS.attr('string'),
  location: DS.attr('string')
})
