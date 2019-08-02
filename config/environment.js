'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'filter-json-persistent',
    environment,
    // contentSecurityPolicy: {'connect-src':"'self' wss://*.firebaseio.com"},
    // firebase: 'https://mycars-f2f82.firebaseio.com',
    contentSecurityPolicy: {
      'script-src': "'self' 'unsafe-eval' apis.google.com",
      'frame-src': "'self' https://*.firebaseapp.com",
      'connect-src': "'self' wss://*.firebaseio.com https://*.googleapis.com"
    },
    //   apiKey: "AIzaSyB9-3KNSJSoV_IkILugAHsvYozPQNHXg1E",
    // authDomain: "mycars-f2f82.firebaseapp.com",
    // databaseURL: "https://mycars-f2f82.firebaseio.com",
    // storageBucket: "mycars-f2f82.appspot.com",
    firebase: {
      apiKey: "AIzaSyB9-3KNSJSoV_IkILugAHsvYozPQNHXg1E",
    authDomain: "mycars-f2f82.firebaseapp.com",
    databaseURL: "https://mycars-f2f82.firebaseio.com",
    projectId: "mycars-f2f82",
    storageBucket: "mycars-f2f82.appspot.com",
    messagingSenderId: "722776646623",
    appId: "1:722776646623:web:3038ace23e96d853"
    },
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_MODULE_UNIFICATION: true
        EMBER_METAL_TRACKED_PROPERTIES: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {

  }

  return ENV;
};
