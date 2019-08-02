import Controller from '@ember/controller';
import {action} from '@ember/object';

export default class CarsEditController extends Controller {
  @action editCar(id) {
    var self = this;
    var make = this.get('model.make');
    var model = this.get('model.model');
    var year = this.get('model.year');

    //Find and update record
    this.store.findRecord('car', id).then(function(car){
      car.set('make', make);
      car.set('model', model);
      car.set('year', year);

      //save updates
      car.save();

      //transtion back to cars on update
      self.transitionToRoute('cars');
    });
  }
}
