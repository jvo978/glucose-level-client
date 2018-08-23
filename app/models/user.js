import DS from 'ember-data'

export default DS.Model.extend({
  doctors: DS.hasMany('doctor'),
  //patients: DS.hasMany('patient'),
  email: DS.attr('string')
})
