import Route from '@ember/routing/route';

export default class CarsRoute extends Route {

  async model() {

    // Step1: Declare Variables
    let allCars;
    let newCars;
    let userRecord1;
    let userRecord2;

    // Step2: Instantiate Objects
    try {
      userRecord1 = await this.store.createRecord('user', {
        name: 'Tony',
      });
      userRecord2 = await this.store.createRecord('user', {
        name: 'Jada',
      });
    } catch (error) {
      console.log("Error:", error);
    }

    // Step3: Load Models from Store
    allCars = await this.store.findAll('car');
    allCars.set('users', [userRecord1, userRecord2]);
    console.log("AllCar", allCars.users[0].name);
    console.log("AllCar", allCars.users[1].name);

    // Step4 A: Add users to each car
    let beginFilter = () => {
      // ADD Users property
      allCars.map(carRecord => {
        carRecord.set('users', [userRecord1, userRecord2]);
      });
    };

    // Step4 B: Execute Filter
    beginFilter();

    // Step5: Filter Car Results
    newCars = allCars.filter((car) => {
      if (car.make === 'Ford') {
        let users = car.users;
        console.log("Make:", car.make + ", Model:", car.model + ", Year:", car.year);
        console.log('car User Name:', users[0].name);
        console.log('car User Name:', users[1].name);
        return car;
      } // if
    }); // allCars
    return newCars;
  } // model
} // class
