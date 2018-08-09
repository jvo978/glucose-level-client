import Route from '@ember/routing/route'

export default Route.extend({
  model () {
    return this.get('store').findAll('doctor')
  },
  actions: {
    deleteDoctor (doctor) {
      doctor.destroyRecord()
      .then(() => {
        this.get('flashMessages').success('Doctor deleted')
      })
      .then(() => {
        this.transitionTo('doctors')
      })
      .catch(() => {
        this.get('flashMessages').danger('There was a problem. Please try again.')
      })
    },
    updateDoctor (doctor) {
      doctor.save().then(() => this.refresh())
      .then(() => {
        this.transitionTo('doctors')
      })
      .then(() => {
        this.get('flashMessages').success('Doctor Updated')
      })
      .catch(() => {
        this.get('flashMessages').danger('There was a problem. Please try again.')
      })
    }
  }
  // actions: {
  //   createDoctor (doctor) {
  //     const newDoctor = this.get('store').createRecord('doctor', {doctor})
  //     newDoctor.save()
  //     .then(() => {
  //       this.transitionTo('doctors')
  //     })
  //     .then(() => {
  //       this.get('flashMessages').success('Doctor added')
  //     })
  //     .catch(() => {
  //       this.get('flashMessages').danger('There was a problem. Please try again.')
  //     })
  //   }
  // }
})
//     return this.get('store').findAll('doctor')
//   },
//   actions: {
//     goToDoctor (doctor) {
//       this.transitionTo('doctor', doctor.id)
//     },
//     cancel () {
//       this.sendAction('toggleEditing')
//     },
//     createDoctor (doctor) {
//       this.get('store').createRecord('doctor')
//     }
//   }
// })
//     createDoctor (doctor) {
//       const newDoctor = this.get('store').createRecord('doctor', doctor)
//       newDoctor.save()
//           .then(() => {
//             this.transitionTo('doctors')
//           })
//           .then(() => {
//             this.get('flashMessages').success('Create doctor success')
//           })
//           .catch(() => {
//             this.get('flashMessages').danger('There was a problem. Please try again.')
//           })
//     }
//   }
// })
  // return this.get('store').findAll('doctor')
//   actions: {
//     deleteDoctor (doctor) {
//       doctor.destroyRecord()
      // .then(() => {
      //   this.get('flashMessages').success('Successfully deleted doctor')
      // })
      // .catch(() => {
      //   this.get('flashMessages').danger('There was a problem. Please try again.')
      // })
//     },
//     updateDoctor (doctor) {
//       doctor.save()
      // .then(() => {
      //   this.transitionTo('doctors')
      // })
      // .then(() => {
      //   this.get('flashMessages').success('Successfully updated doctor')
      // })
      // .catch(() => {
      //   this.get('flashMessages').danger('There was a problem. Please try again.')
      // })
//     }
//   }
// })
