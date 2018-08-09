// import Route from '@ember/routing/route'
//
// export default Route.extend({
//   model () {
//     return this.get('store').findAll('doctor')
//   },
//   actions: {
//     deleteDoctor (doctor) {
//       doctor.destroyRecord()
//     },
//     updateDoctor (doctor) {
//       doctor.save()
//       .then(() => {
//         this.transitionTo('doctors')
//       })
//       .then(() => {
//         this.get('flashMessages').success('Successfully updated Doctor')
//       })
//       .catch(() => {
//         this.get('flashMessages').danger('There was a problem. Please try again.')
//       })
//     }
//   }
// })
