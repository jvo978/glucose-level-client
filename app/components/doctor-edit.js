import Component from '@ember/component'

export default Component.extend({
  editing: false,
  actions: {
    deleteDoctor () {
      this.sendAction('deleteDoctor', this.get('doctor'))
    },
    updateDoctor () {
      this.toggleProperty('editing')
      this.sendAction('updateDoctor', this.get('doctor'))
    },
    toggleEditing () {
      this.toggleProperty('editing')
    }
  }
})
