import Route from '@ember/routing/route'
import RSVP from 'rsvp'

export default Route.extend({
  model (params) {
    return RSVP.hash({
      doctor: this.get('store').findRecord('doctor', params.doctor_id),
      newPatient: this.get('store').createRecord('patient', {})
    })
  },
  actions: {
    deletePatient (patient) {
      patient.destroyRecord().then(() => this.refresh())
      .then(() => {
        this.get('flashMessages').success('Patient deleted')
      })
      .catch(() => {
        this.get('flashMessages').danger('There was a problem. Please try again.')
      })
    },
    updatePatient (patient) {
      patient.save().then(() => this.refresh())
      .then(() => {
        this.get('flashMessages').success('Patient saved')
      })
      .catch(() => {
        this.get('flashMessages').danger('There was a problem. Please try again.')
      })
    }
  }
})
//   actions: {
//     deletePatient (patient) {
//       patient.destroyRecord()
//     },
//     updatePatient (patient) {
//       patient.save().then(() => this.refresh())
//     }
//   }
// })
