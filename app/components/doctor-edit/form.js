import Component from '@ember/component'

export default Component.extend({
  actions: {
    toggleEditing () {
      this.sendAction('toggleEditing', this.get('doctor'))
    },
    updateDoctor () {
      this.sendAction('updateDoctor', this.get('doctor'))
    }
  }
})
