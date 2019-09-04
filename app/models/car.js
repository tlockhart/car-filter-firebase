import DS from 'ember-data';
const { Model, attr } = DS;

// export default class CarModel extends Model {
//   //Define the structure of a car model object
//   // https://emberigniter.com/getting-started-ember-octane-tutorial/
//   // @attr() id;
//   @attr('string') make;
//   @attr('string') model;
//   @attr('string') year;
// }

export default DS.Model.extend({
  make: DS.attr(),
  model: DS.attr(),
  year: DS.attr(),
  users: DS.hasMany('user'),
});
