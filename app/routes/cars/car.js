import Route from '@ember/routing/route';

export default class CarsCarRoute extends Route {
  model(params) {
    //All Data should be made available at the route
    return this.modelFor('cars').findBy('make', params.car_make);
  }
}
