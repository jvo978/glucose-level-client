import DS from 'ember-data'

export default DS.Model.extend({
  doctors: DS.hasMany('doctor'),
  email: DS.attr('string')
})
