import DS from 'ember-data';
const { attr, Model } = DS;

// export default class UserModel extends Model {
//   @attr('string') name;
export default DS.Model.extend({
  name: DS.attr(),
  car: DS.belongsTo('car')
});
// }
