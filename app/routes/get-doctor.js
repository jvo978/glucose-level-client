import Route from '@ember/routing/route'
import RSVP from 'rsvp'

export default Route.extend({
  model (params) {
    return RSVP.hash({
      doctor: this.get('store').findRecord('doctor', params.doctor_id),
      newPatient: {}
    })
  },
  actions: {
    createPatient (patient) {
      const newPatient = this.get('store').createRecord('patient', patient)
      newPatient.save()
    }
  }
})
