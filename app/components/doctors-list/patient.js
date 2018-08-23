import Component from '@ember/component'

export default Component.extend({
  editing: false,
  actions: {
    deletePatient () {
      return this.sendAction('deletePatient', this.get('patient'))
    },
    updatePatient (patient) {
      this.toggleProperty('editing')
      return this.sendAction('updatePatient', patient)
    },
    toggleEditing () {
      this.toggleProperty('editing')
    }
  }
})
