import Route from '@ember/routing/route';
// import RealtimeRouteMixin from 'emberfire/mixins/realtime-route';
// import Ember from 'ember';
// import $ from 'jquery';

// export default class CarsRoute extends Route.extend(RealtimeRouteMixin) {
// export default class CarsRoute extends Route {
//     model() {
//      return this.store.findAll('car');
//     } // model
// }
// export default Route.extend(RealtimeRouteMixin, {

//   model: function() {
//     return this.store.findAll('car');
//   } // model
// });

export default class CarsRoute extends Route {

  model() {
    return this.store.findAll('car');
  } // model
}
