import Component from '@ember/component'

export default Component.extend({
  actions: {
    updatePatient (patient) {
      patient.set('doctor', this.get('doctor'))
      return this.sendAction('updatePatient', patient)
    },
    deletePatient (patient) {
      return this.sendAction('deletePatient', patient)
    }
  }
})
