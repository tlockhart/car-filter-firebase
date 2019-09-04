import Route from '@ember/routing/route';

export default class CarsRoute extends Route {

  async model() {


    let userRecord1 = await this.store.createRecord('user', {
      name: 'Tony',
    });

    let userRecord2 = await this.store.createRecord('user', {
      name: 'Jada',
    });

    userRecord1.save();
    userRecord2.save();

    // Load all results into the store
    let allCars = await this.store.findAll('car');
    allCars.set('users', [userRecord1, userRecord2]);

    console.log("AllCar", allCars.users[0].name);
    console.log("AllCar", allCars.users[1].name);


  // ADD Users property
  allCars.map(async carRecord => {
    carRecord.set('users', [userRecord1, userRecord2]);
    await carRecord.save();
  });
  await allCars.save();

    // Filter Results
    let newCars = allCars.filter((car) => {
      if (car.make === 'Ford') {
        console.log('car User Name:', car.users[0]);
        return car;
      } // if
  });
  return newCars;

    // Return Multiple Records: Doesn't Work
    // let filterCars = await this.store.query('car', {
    //   filter: {
    //     make: 'Ford'
    //   }
    // }).then(function(fords) {
    //   console.log("Cars", fords);
    // });
    // return filterCars;

  } // model
}
