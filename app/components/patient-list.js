import Component from '@ember/component'

export default Component.extend({
  actions: {
    createPatient (patient) {
      this.sendAction('createPatient', patient)
    }
  }
})
