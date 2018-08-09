import DS from 'ember-data'

export default DS.Model.extend({
  doctor: DS.belongsTo('doctor'),
  name: DS.attr('string'),
  age: DS.attr('number'),
  weight: DS.attr('number'),
  glucose: DS.attr('number'),
  test: DS.attr('string'),
  date: DS.attr('date')
})
