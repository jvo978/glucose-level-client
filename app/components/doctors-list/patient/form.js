import Component from '@ember/component';

export default Component.extend({
  actions: {
    updatePatient: function () {
      return this.sendAction('updatePatient', this.get('patient'))
    },
    cancel: function () {
      this.sendAction('toggleEditing')
    }
  }
})
