import Controller from '@ember/controller';
import {action} from '@ember/object';
import {tracked} from '@glimmer/tracking';

export default class CarsNewController extends Controller {
  @tracked carMake;
  @tracked carModel;
  @tracked carYear;

  resetValues() {
    this.carMake = '';
    this.carModel ='';
    this.carYear = '';
  }

  @action addCar() {
    var self = this;
    var rand = Math.floor((Math.random() * 10000) +1);

    //Create a new object, based on the car model
    var newCar = this.store.createRecord('car', {
      id: rand,
      make: this.get('carMake'),
      model: this.get('carModel'),
      year: this.get('carYear')
    });

    // alert(rand);
    //Add new Object to model
    newCar.save();

    this.resetValues();

    //redirect to cars route
    self.transitionToRoute('cars');
  }
}
