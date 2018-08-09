import Route from '@ember/routing/route'

export default Route.extend({
  model () {
    return {}
  },
  actions: {
    createDoctor (doctor) {
      this.get('store').createRecord('doctor', doctor).save()
      .then(() => {
        this.transitionTo('doctors')
      })
      .then(() => {
        this.get('flashMessages').success('Doctor added')
      })
      .catch(() => {
        this.get('flashMessages').danger('There was a problem. Please try again.')
      })
    }
  }
})
