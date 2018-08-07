import Component from '@ember/component';

export default Component.extend({
  tagName: 'li',
  editing: false,
  actions: {
    deleteDoctor () {
      this.sendAction('deleteDoctor', this.get('doctor'))
    },
    toggleEditing () {
      this.toggleProperty('editing')
    },
    updateDoctor () {
      this.toggleProperty('editing')
      this.sendAction('updateDoctor', this.get('doctor'))
    }
  }
})
