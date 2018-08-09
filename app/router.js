import EmberRouter from '@ember/routing/router'
import config from './config/environment'

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
})

Router.map(function () {
  this.route('sign-up')
  this.route('sign-in')
  this.route('change-password')

  this.route('doctors', function () {
    this.route('create-doctor')
  })
  // this.route('doctor', { path: '/doctors/:doctor_id' })
  // this.route('get-doctor', { path: '/doctors/:doctor_id' })
  this.route('doctor')
})

export default Router
