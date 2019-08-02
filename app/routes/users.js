import Route from '@ember/routing/route';

export default class UsersRoute extends Route {
  model() {
    return this.store.findAll('car');
  }
}

// app/adapters/application.js
// import FirestoreAdapter from 'emberfire/adapters/firestore';

// export default FirestoreAdapter.extend({
//     // enablePersistence: true,
//     // persistenceSettings: { synchronizeTabs: true }
// });

