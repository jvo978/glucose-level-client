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
      patient.destroyRecord()
    },
    updatePatient (patient) {
      patient.save().then(() => this.refresh())
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
