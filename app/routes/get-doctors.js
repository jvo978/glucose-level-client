import Route from '@ember/routing/route'

export default Route.extend({
  model () {
    return this.get('store').findAll('doctor')
  },
  actions: {
    goToDoctor (doctor) {
      this.transitionTo('doctor', doctor.id)
    },
    deleteDoctor (doctor) {
      doctor.destroyRecord()
      .then(() => {
        this.get('flashMessages').success('Successfully deleted doctor')
      })
      .catch(() => {
        this.get('flashMessages').danger('There was a problem. Please try again.')
      })
    },
    updateDoctor (doctor) {
      doctor.save()
      .then(() => {
        this.transitionTo('get-doctors')
      })
      .then(() => {
        this.get('flashMessages').success('Successfully updated doctor')
      })
      .catch(() => {
        this.get('flashMessages').danger('There was a problem. Please try again.')
      })
    }
  }
})
