// import FirebaseAdapter from 'emberfire/adapters/firebase';

// export default FirebaseAdapter.extend({
// });

import CloudFirestoreAdapter from 'ember-cloud-firestore-adapter/adapters/cloud-firestore';

export default CloudFirestoreAdapter.extend({
  // enablePersistence: true,
  // persistenceSettings: { synchronizeTabs: true }
  referenceKeyName: 'referenceTo',
});
