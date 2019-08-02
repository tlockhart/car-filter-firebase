import Controller from '@ember/controller';
import {action} from '@ember/object';
import {tracked} from '@glimmer/tracking';
// import { initializeApp } from 'firebase';
// import { initializeApp } from 'firestore';


export default class CarsController extends Controller {
  @tracked carMakeMatches = [];
  @tracked carMakeNonMatches = this.cars;
  @tracked selectedMake = '';
  @tracked isMakeFound = false;

  // return model
  get cars() {
    return this.model;
  }

  // gets the carMakeValue
  get selectedMake() {
    return this.selectedMake;
  }

  //called in car-item.hbs
    @action async deleteCar(id) {
      // event.preventDefault();
    // var self = this;

    //Find and update record
    this.store.findRecord('car', id, {backgroundReload: false}).then(function(car){
      car.deleteRecord();

      //save updates
      car.save();

      //transtion back to cars on update
      // self.transitionToRoute('cars');
    });
  }

  // sets the selectedMake
  @action selectMake(make, routeCarsToFilter) {
    // Step1: Set the selectedMake
    this.selectedMake = make;

    // Step2: Reset carMakeMatches on multiple button clicks
    this.carMakeMatches = [];

    // Step3: Filter the cars array by make
    routeCarsToFilter(this.selectedMake);
  }

  @action routeCarsToFilter(make){
    // Step 4: Check if input make matches Car make
    this.carMakeMatches = this.cars.filter((filteredCar) => {
      if (filteredCar.make.toLowerCase() === make.toLowerCase()) {
        return filteredCar;
      }
    });
    // console.log("MAKE is", make);

    if (this.carMakeMatches.length > 0) {
      this.isMakeFound = true;
    } else {
      this.isMakeFound = false;
    }

    if (this.isMakeFound) {
      // Step 5:Call fiteredCarsByMake to set carMakeMatches
      this.filterCarsByMake(make, this.carMakeMatches);

    } else {
      this.setNonMatchingCarsToAll();
    }
  }

  setNonMatchingCarsToAll() {
    this.carMakeNonMatches = this.cars;
  }

  filterCarsByMake(make, carMakeMatches) {
    if (this.isMakeFound) {
      // Step6: Update carMakeMatches and carMakeNonMatches based on make
      this.carMakeMatches = carMakeMatches;

       this.carMakeNonMatches = this.cars.filter((car) => {
        if (car.make.toLowerCase() != make.toLowerCase()) {
          return car;
        }
      });
    }
    else {
      // Step7: Set Car Make Matches to empty if no match found
      this.carMakeMatches = [];
      // console.log('carMakeMatches BLANK', this.carMakeMatches);
    } //if
  }

  @action setDisplayMessage(car){
      var isSelectedMakeEmpty = this.selectedMake === '';
      if((this.selectedMake.toLowerCase() === car.make.toLowerCase())
      && !isSelectedMakeEmpty){
        this.isMakeFound = true;
        // console.log("IF isMakeFound", this.isMakeFound);
      } //if
      else
      {
        this.isMakeFound = false;
        // console.log("ELSE isMakeFound", this.isMakeFound);
      }
  } //shouldDisplayMessage
}
