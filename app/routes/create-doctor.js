import Route from '@ember/routing/route'

export default Route.extend({
  model () {
    return {}
  },
  actions: {
    createDoctor (doctor) {
      const newDoctor = this.get('store').createRecord('doctor', doctor)
      newDoctor.save()
      .then(() => {
        this.transitionTo('get-doctors')
      })
      .then(() => {
        this.get('flashMessages').success('Create doctor success')
      })
      .catch(() => {
        this.get('flashMessages').danger('There was a problem. Please try again.')
      })
    }
  }
})
