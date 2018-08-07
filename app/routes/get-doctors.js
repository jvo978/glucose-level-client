import Route from '@ember/routing/route'

export default Route.extend({
  model () {
    return this.get('store').findAll('doctor')
  },
  actions: {
    deleteDoctor (doctor) {
      doctor.destroyRecord()
      .then(() => {
        this.get('flashMessages').success('Delete doctor success!')
      })
      .catch(() => {
        this.get('flashMessages').danger('There was a problem. Please try again.')
      })
    },
    updateDoctor (doctor) {
      doctor.save()
      .then(() => {
        this.get('flashMessages').success('Doctor updated success!')
      })
      .catch(() => {
        this.get('flashMessages').danger('There was a problem. Please try again.')
      })
    }
  }
})
